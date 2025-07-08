import { X } from "lucide-react";
import { motion } from "framer-motion";
import {
  useGetAllCartProductsQuery,
  useUpdateCartItemQuantityMutation,
  useDeleteCartItemMutation,
} from "@/redux/api/cartApi";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckoutClick: () => void;
}

const CartSidebar = ({
  isOpen,
  onClose,
  onCheckoutClick,
}: CartSidebarProps) => {
  const { data, isLoading } = useGetAllCartProductsQuery();
  const cartItems = data?.data || [];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const [updateQuantity] = useUpdateCartItemQuantityMutation();
  const [deleteItem] = useDeleteCartItemMutation();

  const handleQuantityChange = async (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    await updateQuantity({ id, quantity: newQuantity });
  };

  const handleRemove = async (id: string) => {
    await deleteItem(id);
  };

  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed md:top-16 right-0 h-full w-80 bg-white shadow-lg z-50 border-l border-gray-200 p-4 overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex gap-3 items-center border-b pb-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-xs text-gray-500">৳ {item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() =>
                        item._id &&
                        handleQuantityChange(item._id, (item.quantity || 1) - 1)
                      }
                      className="w-6 h-6 text-sm border rounded"
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity || 1}</span>
                    <button
                      onClick={() =>
                        item._id &&
                        handleQuantityChange(item._id, (item.quantity || 1) + 1)
                      }
                      className="w-6 h-6 text-sm border rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => item._id && handleRemove(item._id)}
                    className="text-red-500 text-xs mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>৳ {total.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckoutClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </motion.aside>
  );
};

export default CartSidebar;
