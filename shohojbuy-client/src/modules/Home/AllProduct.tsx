import LoadingPage from "@/components/LoadingPage";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import type { IProductType } from "types";
import AllProductCart from "./AllProductCart";

const AllProduct = () => {
  const {
    data: allProducts,
    isLoading,
    isError,
  } = useGetAllProductsQuery(undefined);

  if (isLoading) return <LoadingPage />;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load products</p>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8 mt-3">
        <h1 className="text-3xl font-bold text-center">
          A<span className="text-[#f00480]">ll</span> Pro
          <span className="text-[#f00480]">du</span>cts
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {allProducts?.data?.map((product: IProductType) => (
          <AllProductCart key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
