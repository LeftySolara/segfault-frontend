import React from "react";
import { Paper, Text } from "@mantine/core";

import useThreadCardStyles from "./ThreadCard.styles";

interface ThreadCardProps {
  title: string;
  // author: string;
  // timestamp: Date;
}

const ThreadCard = (props: ThreadCardProps) => {
  const { classes } = useThreadCardStyles();
  const { title } = props;

  return (
    <Paper className={classes["thread-card"]} p="sm">
      <div>
        <Text className={classes["thread-title"]}>{title}</Text>
      </div>
    </Paper>
  );
};
export default ThreadCard;
