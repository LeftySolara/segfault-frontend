import api from "./api";

import { Post } from "./post";

export interface Thread {
  id: string;
  author: {
    authorId: string;
    username: string;
    email: string;
  };
  board: {
    boardId: string;
    topic: string;
  };
  topic: string;
  dateCreated: string;
  posts: Array<Post>;
  lastPost: string;
}

export interface GetThreadsResponse {
  threads: Array<Thread>;
}

const threadApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /** Fetch all threads in the database */
    getThreads: builder.query<
      GetThreadsResponse,
      { sortField: string; sortDirection: string; limit: number }
    >({
      query: (arg) => {
        const { sortField, sortDirection, limit } = arg;
        return {
          url: "/threads",
          method: "GET",
          credentials: "include",
          params: { sort: `${sortField}:${sortDirection}`, limit },
        };
      },
    }),
    getThreadsByBoard: builder.query<
      GetThreadsResponse,
      { id: string; sortField: string; sortDirection: string; limit: number }
    >({
      query: (arg) => {
        const { id, sortField, sortDirection, limit } = arg;
        return {
          url: `/threads/board/${id}`,
          method: "GET",
          credentials: "include",
          params: { sort: `${sortField}:${sortDirection}`, limit },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetThreadsQuery, useGetThreadsByBoardQuery } = threadApi;
