"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    // prepareHeaders: (headers, { getState }) => {
    //   const accessToken = (getState() as RootState).auth.accessToken;

    //   if (accessToken) {
    //     headers.set("Authorization", `Bearer ${accessToken}`);
    //   }
    // },
  }),
  tagTypes: ["Creator", "Post", "Comment", "Like", "Follow", "Notification"],
  endpoints: () => ({}),
});
