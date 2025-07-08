// import LoadingPage from "@/components/LoadingPage";
// import { useCreateCartItemMutation } from "@/redux/api/cartApi";
// import { useGetSingleProductQuery } from "@/redux/api/productApi";
// import { useParams } from "react-router";
// import { toast } from "sonner";

// const SingleProductPage = () => {
//   const { id } = useParams<{ id: string }>();
//   const { data, isLoading, isError } = useGetSingleProductQuery(id || "");
//   const [createCartItem] = useCreateCartItemMutation();

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
//       try {
//         await createCartItem(product).unwrap();
//         toast.success(`${product.title} is added to CART`);
//       } catch (error) {
//         console.error("Failed to add product:", error);
//         toast.error(error.message);
//       }
//     };

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
//           <button onClick={handleAddToCart}
//               disabled={!product._id || isLoading} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded">
//             {isLoading ? "Adding..." : "Add to Cart"}
//           </button>
//           {/* <button
//               onClick={handleAddToCart}
//               disabled={!product._id || isLoading}
//               className="w-full bg-[#18dcff] hover:bg-[#18dcff]/80 text-white text-xs font-semibold py-1 mt-2 rounded shadow-md transition-all duration-300 hover:shadow-[#18dcff] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLoading ? "Adding..." : "Add to Cart"}
//             </button> */}
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
    } catch (error) {
      console.error("Failed to add product:", error);
      toast.error(
        typeof error === "object" && error !== null && "message" in error
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ? (error as any).message
          : "Something went wrong"
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-lg shadow-md p-6">
        <div className="w-full md:w-[400px] h-[400px] overflow-hidden rounded-md">
          <img
            src={product.image || "https://via.placeholder.com/400x300"}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-xl font-semibold text-green-600">
            ৳ {product.price}
          </p>
          <button
            onClick={handleAddToCart}
            disabled={!product._id || isAdding}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAdding ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
