// import LoadingPage from "@/components/LoadingPage";
// import { useCreateCartItemMutation } from "@/redux/api/cartApi";
// import { useGetSingleProductQuery } from "@/redux/api/productApi";
// import { useParams } from "react-router";
// import { toast } from "sonner";

// const SingleProductPage = () => {
//   const { id } = useParams<{ id: string }>();
//   const { data, isLoading, isError } = useGetSingleProductQuery(id || "");

//   const [createCartItem, { isLoading: isAdding }] = useCreateCartItemMutation();

//   const product = data?.data;

//   if (isLoading) return <LoadingPage />;

//   if (isError || !product) {
//     return (
//       <p className="text-center mt-10 text-red-500">
//         Failed to load product details.
//       </p>
//     );
//   }

//   const handleAddToCart = async () => {
//     try {
//       await createCartItem(product).unwrap();
//       toast.success(`${product.title} is added to CART`);
//     } catch (error) {
//       console.error("Failed to add product:", error);
//       toast.error(
//         typeof error === "object" && error !== null && "message" in error
//           ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
//             (error as any).message
//           : "Something went wrong"
//       );
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-lg shadow-md p-6">
//         <div className="w-full md:w-[400px] h-[400px] overflow-hidden rounded-md">
//           <img
//             src={product.image || "https://via.placeholder.com/400x300"}
//             alt={product.title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="flex-1 space-y-4">
//           <h2 className="text-2xl font-bold">{product.title}</h2>
//           <p className="text-gray-700">{product.description}</p>
//           <p className="text-xl font-semibold text-green-600">
//             ৳ {product.price}
//           </p>
//           <button
//             onClick={handleAddToCart}
//             disabled={!product._id || isAdding}
//             className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isAdding ? "Adding..." : "Add to Cart"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProductPage;

import LoadingPage from "@/components/LoadingPage";
import { useCreateCartItemMutation } from "@/redux/api/cartApi";
import { useGetSingleProductQuery } from "@/redux/api/productApi";
import { useParams } from "react-router";
import { toast } from "sonner";

const SingleProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleProductQuery(id || "");

  const [createCartItem, { isLoading: isAdding }] = useCreateCartItemMutation();

  const product = data?.data;

  if (isLoading) return <LoadingPage />;

  if (isError || !product) {
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load product details.
      </p>
    );
  }

  const handleAddToCart = async () => {
    try {
      await createCartItem(product).unwrap();
      toast.success(`${product.title} is added to CART`);
    } catch (error: unknown) {
      console.error("Failed to add product:", error);
      toast.error(
        typeof error === "object" && error !== null && "message" in error
          ? (error as { message: string }).message
          : `${product.title} already added to Cart`
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 rounded-2xl">
      <div
        className="flex flex-col md:flex-row gap-6 items-start 
        bg-white/10 backdrop-blur-lg border-2 rounded-2xl 
        shadow-[0_10px_25px_rgba(0,0,0,0.3)] border-transparent 
        p-6 relative"
        style={{
          borderImage: "linear-gradient(to right, #18dcff, #a855f7) 1",
        }}
      >
        <div className="w-full md:w-[400px] h-[400px] overflow-hidden rounded-xl">
          <img
            src={product.image || "https://via.placeholder.com/400x300"}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 space-y-5 text-white">
          <h2 className="text-3xl font-bold tracking-wide drop-shadow">
            {product.title}
          </h2>
          <p className="text-sm text-white/80">{product.description}</p>
          <p className="text-2xl font-bold bg-gradient-to-r from-[#0ff] to-[#a855f7] text-transparent bg-clip-text drop-shadow-md">
            ৳ {product.price}
          </p>

          <button
            onClick={handleAddToCart}
            disabled={!product._id || isAdding}
            className="relative inline-flex items-center justify-center px-6 py-2 
              text-white font-semibold rounded-md overflow-hidden z-10
              bg-gradient-to-br from-[#0ff] to-[#a855f7]
              shadow-[0_4px_12px_rgba(24,220,255,0.4)] 
              transition-all duration-300 ease-in-out
              hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.6)] 
              active:translate-y-[2px] active:shadow-none
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="z-20 relative">
              {isAdding ? "Adding..." : "Add to Cart"}
            </span>

            <span
              className="absolute inset-0 rounded-md z-0 pointer-events-none 
                bg-gradient-to-br from-[#0ff] to-[#a855f7] 
                blur-md opacity-20 animate-pulse"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
