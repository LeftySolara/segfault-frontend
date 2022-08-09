import React from "react";
import { Paper, Text } from "@mantine/core";

import useBoardCardStyles from "./BoardCard.styles";

interface BoardCardProps {
  topic: string;
  description: string;
  threadCount: number;
}

const BoardCard = (props: BoardCardProps) => {
  const { topic, description, threadCount } = props;
  const { classes } = useBoardCardStyles();

  return (
    <Paper className={classes["board-card"]} p="sm">
      <div className={classes["board-title-group"]}>
        <Text className={classes["board-title"]}>{topic}</Text>
        <Text className={classes["board-description"]}>{description}</Text>
      </div>
      <div className={classes["board-thread-group"]}>
        <Text className={classes["board-title"]}>Threads</Text>
        <Text className={classes["board-description"]}>{threadCount}</Text>
      </div>
    </Paper>
  );
};

export default BoardCard;
