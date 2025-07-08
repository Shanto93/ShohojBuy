import LoadingPage from "@/components/LoadingPage";
import { useGetSingleProductQuery } from "@/redux/api/productApi";
import { useParams } from "react-router";

const SingleProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleProductQuery(id || "");

  const product = data?.data;

  if (isLoading) return <LoadingPage />;
  if (isError || !product) {
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load product details.
      </p>
    );
  }

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
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
