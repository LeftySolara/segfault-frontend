import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ApiError {
  status: number;
  data: {
    message: string;
  };
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ENDPOINT,
  }),
  endpoints: () => ({}),
});

export default api;
