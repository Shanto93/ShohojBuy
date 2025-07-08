import { X, Minus, Plus, Trash2 } from "lucide-react";
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
      className="fixed top-16 right-0 h-full w-full sm:w-96 bg-gradient-to-t from-[#1e1b4b] via-[#5e17eb]/60 to-[#18dcff]/80 shadow-lg z-50 border-l border-gray-200 p-4 overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      {isLoading ? (
        <p className="text-red-500 font-bold">Loading...</p>
      ) : cartItems.length === 0 ? (
        <p className="text-center mt-10">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex gap-3 items-start sm:items-center border-b pb-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 space-y-1">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-xs">৳ {item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {/* <button
                      onClick={() =>
                        item._id &&
                        handleQuantityChange(item._id, (item.quantity || 1) - 1)
                      }
                      className="w-8 h-8 p-1 flex items-center justify-center border-2 rounded hover:border-pink-500"
                    >
                      <Minus size={16} />
                    </button> */}
                    <button
                      onClick={() =>
                        item._id &&
                        handleQuantityChange(item._id, (item.quantity || 1) - 1)
                      }
                      className="w-8 h-8 p-1 flex items-center justify-center border-2 border-white rounded-md 
    bg-gradient-to-b from-white to-gray-200 text-black 
    shadow-[0_4px_0_0_rgba(0,0,0,0.2)] 
     hover:shadow-[0_0_8px_2px_rgba(236,72,153,0.6)] 
    focus:outline-none focus:ring-2  
    active:translate-y-[2px] active:shadow-none 
    transition-all duration-200 ease-in-out"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="text-sm w-6 font-semibold text-center">
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() =>
                        item._id &&
                        handleQuantityChange(item._id, (item.quantity || 1) + 1)
                      }
                      className="w-8 h-8 p-1 flex items-center justify-center border-2 border-white rounded-md 
    bg-gradient-to-b from-white to-gray-200 text-black 
    shadow-[0_4px_0_0_rgba(0,0,0,0.2)] 
     hover:shadow-[0_0_8px_2px_rgba(236,72,153,0.6)] 
    focus:outline-none focus:ring-2  
    active:translate-y-[2px] active:shadow-none 
    transition-all duration-200 ease-in-out"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => item._id && handleRemove(item._id)}
                      className="mw-8 h-8 p-1 flex items-center justify-center border-2 border-white rounded-md 
    bg-gradient-to-b from-white to-gray-200 text-red-500 
    shadow-[0_4px_0_0_rgba(0,0,0,0.2)] 
     hover:shadow-[0_0_8px_2px_rgba(236,72,153,0.6)] 
    focus:outline-none focus:ring-2  
    active:translate-y-[2px] active:shadow-none 
    transition-all duration-200 ease-in-out"
                      title="Remove Item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between font-semibold">
              <span className="">Total:</span>
              <span className="">৳ {total.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckoutClick}
              className="w-full bmw-8 h-8 p-1 flex items-center justify-center border-2 border-white rounded-md 
    bg-gradient-to-b from-white to-gray-200 text-black 
    shadow-[0_4px_0_0_rgba(0,0,0,0.2)] 
     hover:shadow-[0_0_8px_2px_rgba(236,72,153,0.6)] 
    focus:outline-none focus:ring-2  
    active:translate-y-[2px] active:shadow-none 
    transition-all duration-200 ease-in-out"
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
