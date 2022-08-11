import React from "react";
import { Link } from "react-router-dom";
import { Paper, Text } from "@mantine/core";

import useBoardCardStyles from "./BoardCard.styles";

interface BoardCardProps {
  id: string;
  topic: string;
  description: string;
  threadCount: number;
}

const BoardCard = (props: BoardCardProps) => {
  const { id, topic, description, threadCount } = props;
  const { classes } = useBoardCardStyles();

  return (
    <Paper className={classes["board-card"]} p="sm">
      <div className={classes["board-title-group"]}>
        <Text
          className={classes["board-title"]}
          component={Link}
          to={`/board/${id}`}
        >
          {topic}
        </Text>
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
