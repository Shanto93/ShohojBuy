import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IProductType } from "types";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/v1",
    baseUrl: "https://shohoj-buy-server.vercel.app/api/v1",
  }),
  endpoints: (build) => ({
    // GET all products
    getAllProducts: build.query<{ data: IProductType[] }, void>({
      query: () => "/products",
    }),

    // GET single product
    getSingleProduct: build.query<{ data: IProductType }, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi;

export default productApi;
