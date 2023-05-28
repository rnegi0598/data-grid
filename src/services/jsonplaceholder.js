// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const placeholderApi = createApi({
  reducerPath: "placeholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  keepUnusedDataFor: 60,
  endpoints: (builder) => ({
    getUser: builder.query({
      query: ({ start, end }) => {
        if (start === -1 && end === -1) {
          return "users";
        }
        return `users?_start=${start}&_end=${end}`;
      },
      transformResponse: (response, meta, arg) => {
        // Modify the response data here
        const { category, value } = arg;
        const updatedArr = response.map((item) => ({
          id: item.id,
          name: item.name,
          username: item.username,
          email: item.email,
          address: item.address.street + " " + item.address.city,
          phone: item.phone,
          website: item.website,
        }));

        if (category === "all" && value !== "") {
          return updatedArr.filter((item) => {
            const valuesArray = Object.values(item);
            if (valuesArray.includes(value)) {
              return true;
            }
            return false;
          });
        }
        return updatedArr;
      },
    }),
    getPosts: builder.query({
      query: ({ start, end }) => {
        if (start === -1 && end === -1) {
          return "posts";
        }
        return `posts?_start=${start}&_end=${end}`;
      },
    }),
    getComments: builder.query({
      query: ({ start, end }) => {
        if (start === -1 && end === -1) {
          return "comments";
        }
        return `comments?_start=${start}&_end=${end}`;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery, useGetPostsQuery, useGetCommentsQuery } =
  placeholderApi;
