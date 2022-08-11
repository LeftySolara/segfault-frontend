export interface Post {
  id: string;
  author: {
    authorId: string;
    username: string;
    email: string;
  };
  thread: {
    threadId: string;
    topic: string;
  };
  dateCreated: string;
  content: string;
}
