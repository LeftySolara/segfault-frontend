import api from "./api";

export interface User {
  id: string;
  email: string;
  username: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<User, LoginRequest>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
        credentials: "include",
      }),
    }),
  }),
  overrideExisting: false,
});

// eslint-disable-next-line import/prefer-default-export
export const { useLoginMutation } = authApi;
