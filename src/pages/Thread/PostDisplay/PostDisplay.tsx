import React from "react";
import { Paper, Text, TypographyStylesProvider } from "@mantine/core";

import usePostDisplayStyles from "./PostDisplay.styles";

interface PostDisplayProps {
  author: string | undefined;
  content: string | undefined;
  timeStamp: Date | undefined;
  joinDate: Date | undefined;
}

const PostDisplay = (props: PostDisplayProps) => {
  const { author, content, timeStamp, joinDate } = props;
  const { classes } = usePostDisplayStyles();

  return (
    <Paper className={classes.container}>
      <div className={classes.header}>
        <div className={classes["author-container"]}>
          <Text className={classes.author}>{author}</Text>
        </div>
        <div>
          <Text className={classes.timestamp}>
            {timeStamp && new Date(timeStamp).toLocaleString()}
          </Text>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes["user-info-container"]}>
          <div className={classes["user-info"]}>
            <Text className={classes["user-info-text"]}>
              Registered: {joinDate && new Date(joinDate).toLocaleDateString()}
            </Text>
          </div>
        </div>
        <div className={classes["content-container"]}>
          <TypographyStylesProvider>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </TypographyStylesProvider>
        </div>
      </div>
    </Paper>
  );
};

export default PostDisplay;
