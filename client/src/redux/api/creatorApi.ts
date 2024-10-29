import { api } from "./apiSlice";

// Interface Imports

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCreators: builder.query<any, void>({
      query: () => `/creator/all`,
      providesTags: ["Creator"],
    }),

    getFeaturedCreators: builder.query<any, void>({
      query: () => `/creator/getfeatured`,
      providesTags: ["Creator"],
    }),
  }),
});

export const { useGetAllCreatorsQuery, useGetFeaturedCreatorsQuery } = userApi;
