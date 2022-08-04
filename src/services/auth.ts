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
        headers: { "Content-Type": "application/json" },
      }),
    }),
    logout: builder.mutation<undefined, void>({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
        credentials: "include",
      }),
    }),
    checkIsAuthenticated: builder.query<User | undefined, void>({
      query: () => ({
        url: "/auth/user",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
  overrideExisting: false,
});

// eslint-disable-next-line import/prefer-default-export
export const {
  useLoginMutation,
  useLogoutMutation,
  useCheckIsAuthenticatedQuery,
} = authApi;
