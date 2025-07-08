import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;

export default productApi;
