import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User, Repo } from '../model/userTypes'

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: (username) => `/users/${username}`,
    }),
    getUserRepos: builder.query<Repo[], string>({
      query: (username) => `/users/${username}/repos?per_page=100`,
    }),
  }),
})

export const { useGetUserQuery, useGetUserReposQuery } = userApi