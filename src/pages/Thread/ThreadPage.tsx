import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostsByThreadQuery } from "services/post";
import PostDisplay from "./PostDisplay/PostDisplay";

const ThreadPage = () => {
  const { id } = useParams();

  const { data } = useGetPostsByThreadQuery({ id });

  return (
    <div>
      {data &&
        data.posts.map((post) => {
          return (
            <PostDisplay
              author={post.author.username}
              content={post.content}
              timeStamp={post.dateCreated}
              joinDate={post.author.joinDate}
            />
          );
        })}
    </div>
  );
};

export default ThreadPage;
