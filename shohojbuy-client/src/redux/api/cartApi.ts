import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IProductType } from "types";

const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shohoj-buy-server.vercel.app/api/v1",
    // baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["Cart"],
  endpoints: (build) => ({
    getAllCartProducts: build.query<{ data: IProductType[] }, void>({
      query: () => "/carts",
      providesTags: ["Cart"],
    }),
    updateCartItemQuantity: build.mutation<
      { message: string },
      { id: string; quantity: number }
    >({
      query: ({ id, quantity }) => ({
        url: `/carts/${id}`,
        method: "PATCH",
        body: { quantity },
      }),
      invalidatesTags: ["Cart"],
    }),

    deleteCartItem: build.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),

    createCartItem: build.mutation<
      { message: string; data: IProductType },
      IProductType
    >({
      query: (product) => ({
        url: "/carts",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetAllCartProductsQuery,
  useCreateCartItemMutation,
  useUpdateCartItemQuantityMutation,
  useDeleteCartItemMutation,
} = cartApi;

export default cartApi;
