import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokeCartApi = createApi({
  reducerPath: "pokeCartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9009/" }),
  tagTypes: ["Data"],
  endpoints: (builder) => ({
    getCartPokemon: builder.query({
      query: () => "api/pokemons",
      providesTags: ["Data"],
    }),
    addPokemon: builder.mutation({
      query: (pokemon) => ({
        url: "/api/pokemons",
        method: "POST",
        body: pokemon,
      }),
      invalidatesTags: ["Data"],
    }),
  }),
});

export const { useGetCartPokemonQuery, useAddPokemonMutation } = pokeCartApi;
