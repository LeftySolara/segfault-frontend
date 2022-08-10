import React from "react";
import { Paper, Text } from "@mantine/core";

import useThreadCardStyles from "./ThreadCard.styles";

interface ThreadCardProps {
  title: string;
  author: string;
  // timestamp: Date;
}

const ThreadCard = (props: ThreadCardProps) => {
  const { classes } = useThreadCardStyles();
  const { title, author } = props;

  return (
    <Paper className={classes["thread-card"]} p="sm">
      <div>
        <Text className={classes["thread-title"]} lineClamp={2}>
          {title}
        </Text>
      </div>
      <div>
        <Text className={classes["secondary-text"]}>
          by{" "}
          <Text inherit component="span" className={classes.author}>
            {author}
          </Text>
        </Text>
      </div>
    </Paper>
  );
};
export default ThreadCard;
