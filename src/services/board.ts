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

/** Query and mutation functions for interacting with board data. */
const boardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /** Fetch all boards in the database. */
    getBoards: builder.query<Board | undefined, void>({
      query: () => ({
        url: "/boards",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetBoardsQuery } = boardApi;
