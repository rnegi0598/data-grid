// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const placeholderApi = createApi({
  reducerPath: 'placeholderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  keepUnusedDataFor: 60,
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "users",
    }),
    getPosts: builder.query({
        query: () => "posts",
      }),
      getComments: builder.query({
        query: () => "comments",
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery, useGetPostsQuery,useGetCommentsQuery } = placeholderApi;