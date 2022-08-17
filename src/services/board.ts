import api from "./api";

export interface Board {
  id: string;
  topic: string;
  description: string;
  threads: Array<string>;
  category: {
    topic: string;
    categoryId: string;
  };
}

export interface GetBoardsResponse {
  boards: Array<Board>;
}

export interface GetBoardResponse {
  board: {
    topic: string;
    description: string;
    categoryId: string;
  };
}

/** Query and mutation functions for interacting with board data. */
const boardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /** Fetch all boards in the database. */
    getBoards: builder.query<GetBoardsResponse, void>({
      query: () => ({
        url: "/boards",
        method: "GET",
        credentials: "include",
      }),
    }),
    getBoardById: builder.query<GetBoardResponse, { id: string | undefined }>({
      query: (arg) => {
        const { id } = arg;
        return {
          url: `/boards/${id}`,
          method: "GET",
          credentials: "include",
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetBoardsQuery, useGetBoardByIdQuery } = boardApi;
