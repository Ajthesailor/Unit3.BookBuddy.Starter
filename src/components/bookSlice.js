import api from "../store/api";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: `/`,
        params: {
          pageSize: 50,
        },
      }),
      }),
    getBook: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetBookQuery } = bookApi;
