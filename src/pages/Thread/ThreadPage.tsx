import React from "react";
import { useParams } from "react-router-dom";
import { Text } from "@mantine/core";
import { useGetPostsByThreadQuery } from "services/post";
import { useAppSelector } from "hooks/reduxHooks";
import { selectCurrentUser } from "store/auth/auth.slice";
import PostDisplay from "./PostDisplay/PostDisplay";
import useThreadPageStyles from "./ThreadPage.styles";

const ThreadPage = () => {
  const { id } = useParams();
  const { data } = useGetPostsByThreadQuery({ id });
  const { classes } = useThreadPageStyles();
  const user = useAppSelector(selectCurrentUser);

  return (
    <>
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
      <div className={classes["bottom-container"]}>
        {user ? (
          <Text>Logged In As {user.username}</Text>
        ) : (
          <Text className={classes["login-message-text"]}>
            You must log in to post
          </Text>
        )}
      </div>
    </>
  );
};

export default ThreadPage;
