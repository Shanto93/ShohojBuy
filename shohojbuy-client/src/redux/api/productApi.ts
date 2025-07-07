import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (build) => ({
    getProduct: build.query({
      query: () => "",
    }),
  }),
});

export const { useGetProductQuery } = productApi;

export default productApi;