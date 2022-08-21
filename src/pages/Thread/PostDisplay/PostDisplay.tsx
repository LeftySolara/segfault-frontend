/* eslint-disable react/no-danger */
import React from "react";
import { Paper, Text, TypographyStylesProvider } from "@mantine/core";
import DOMPurify from "dompurify";

import usePostDisplayStyles from "./PostDisplay.styles";

interface PostHeaderProps {
  author: string;
  timestamp: Date;
}

interface PostAuthorInfoProps {
  joinDate: Date;
}

interface PostContentProps {
  content: string;
}

interface PostDisplayProps {
  author: string | undefined;
  content: string;
  timestamp: Date | undefined;
  joinDate: Date | undefined;
}

const PostHeader = (props: PostHeaderProps) => {
  const { author, timestamp } = props;
  const { classes } = usePostDisplayStyles();

  return (
    <div className={classes.header}>
      <div className={classes["author-container"]}>
        <Text className={classes.author}>{author}</Text>
      </div>
      <div>
        <Text className={classes.timestamp}>
          {timestamp && new Date(timestamp).toLocaleString()}
        </Text>
      </div>
    </div>
  );
};

const PostAuthorInfo = (props: PostAuthorInfoProps) => {
  const { joinDate } = props;
  const { classes } = usePostDisplayStyles();

  return (
    <div className={classes["user-info-container"]}>
      <div className={classes["user-info"]}>
        <Text className={classes["user-info-text"]}>
          Registered: {joinDate && new Date(joinDate).toLocaleDateString()}
        </Text>
      </div>
    </div>
  );
};

const PostContent = (props: PostContentProps) => {
  const { content } = props;
  const { classes } = usePostDisplayStyles();

  const sanitizedContent = {
    __html: DOMPurify.sanitize(content || ""),
  };

  return (
    <div className={classes["content-container"]}>
      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={sanitizedContent} />
      </TypographyStylesProvider>
    </div>
  );
};

const PostDisplay = (props: PostDisplayProps) => {
  const { author, content, timestamp, joinDate } = props;
  const { classes } = usePostDisplayStyles();

  return (
    <Paper className={classes.container}>
      <PostHeader author={author || ""} timestamp={timestamp || new Date()} />
      <div className={classes.bottom}>
        <PostAuthorInfo joinDate={joinDate || new Date()} />
        <PostContent content={content} />
      </div>
    </Paper>
  );
};

export default PostDisplay;
