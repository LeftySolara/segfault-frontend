import api from "./api";

export interface Post {
  id: string;
  author: {
    authorId: string;
    username: string;
    email: string;
    joinDate: Date;
    postCount: number;
  };
  thread: {
    threadId: string;
    topic: string;
  };
  dateCreated: Date;
  content: string;
}

export interface GetPostsByThreadResponse {
  posts: Array<Post>;
}

const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPostsByThread: builder.query<
      GetPostsByThreadResponse,
      { id: string | undefined }
    >({
      query: (arg) => {
        const { id } = arg;
        return {
          url: `/posts/thread/${id}`,
          method: "GET",
          credentials: "include",
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostsByThreadQuery } = postApi;
