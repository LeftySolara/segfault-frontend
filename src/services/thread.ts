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

export interface CreateThreadRequest {
  topic: string;
  authorId: string;
  boardId: string;
  content: string;
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
    createThread: builder.mutation<Thread, CreateThreadRequest>({
      query: ({ topic, authorId, boardId, content }) => ({
        url: "threads",
        method: "POST",
        body: {
          topic,
          authorId,
          boardId,
          content,
        },
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetThreadsQuery,
  useGetThreadsByBoardQuery,
  useCreateThreadMutation,
} = threadApi;
