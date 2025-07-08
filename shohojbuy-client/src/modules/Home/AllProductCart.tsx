import { useCreateCartItemMutation } from "@/redux/api/cartApi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import type { IProductType } from "types";

const AllProductCart = ({ product }: { product: IProductType }) => {
  const placeholderImage =
    "https://via.placeholder.com/200x200.png?text=Product+Image";

  const navigate = useNavigate();

  const [createCartItem, { isLoading }] = useCreateCartItemMutation();

  const handleNavigate = (id: string) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = async () => {
    try {
      await createCartItem(product).unwrap();
      toast.success(`${product.title} is added to CART`);
    } catch (error) {
      console.error("Failed to add product:", error);
      toast.error(`${product.title} already added to Cart`);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-[200px] h-[300px] relative overflow-hidden rounded-2xl shadow-xl group bg-white/10 backdrop-blur-lg border border-white/10"
    >
      <img
        src={product.image || placeholderImage}
        alt={product.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent">
        <div className="p-4 z-10 text-white space-y-1">
          <h2 className="text-sm font-semibold">{product.title}</h2>
          <p className="text-[#f00480] font-bold text-sm drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]">
            ৳ {product.price}
          </p>
          <div className="flex gap-3">
            {/* Details Button */}
            <button
              onClick={() => product._id && handleNavigate(product._id)}
              disabled={!product._id}
              className="w-full text-xs font-semibold py-1 mt-2 rounded-md 
                border-2 border-[#18dcff] 
                bg-gradient-to-b from-[#0ff] to-[#0abec7] text-black 
                shadow-[0_4px_0_0_rgba(0,0,0,0.2)]  
                hover:shadow-[0_0_12px_2px_rgba(236,72,153,0.6)] 
                active:translate-y-[2px] active:shadow-none 
                transition-all duration-200 ease-in-out 
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Details
            </button>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!product._id || isLoading}
              className="w-full text-xs font-semibold py-1 mt-2 rounded-md 
                border-2 border-[#18dcff] 
                bg-gradient-to-b from-[#0ff] to-[#0abec7] text-black 
                shadow-[0_4px_0_0_rgba(0,0,0,0.2)] 
                hover:shadow-[0_0_12px_2px_rgba(236,72,153,0.6)] 
                active:translate-y-[2px] active:shadow-none 
                transition-all duration-200 ease-in-out 
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AllProductCart;
