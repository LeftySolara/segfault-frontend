import React from "react";
import { Link } from "react-router-dom";
import { Paper, Text, Tooltip } from "@mantine/core";

import { formatDistance } from "date-fns";

import useThreadCardStyles from "./ThreadCard.styles";

interface ThreadCardProps {
  id: string;
  title: string;
  author: string;
  timestamp: Date;
}

const ThreadCard = (props: ThreadCardProps) => {
  const { classes } = useThreadCardStyles();
  const { id, title, author, timestamp } = props;

  return (
    <Paper className={classes["thread-card"]} p="sm">
      <div>
        <Text
          className={classes["thread-title"]}
          lineClamp={2}
          component={Link}
          to={`/thread/${id}`}
        >
          {title}
        </Text>
      </div>
      <div className={classes["secondary-text-container"]}>
        <Text className={classes["secondary-text"]}>
          by{" "}
          <Text inherit component="span" className={classes.author}>
            {author}
          </Text>
        </Text>
        <Tooltip label={timestamp.toLocaleString()}>
          <Text className={classes["secondary-text"]}>
            {formatDistance(timestamp, new Date(), {
              addSuffix: true,
            })}
          </Text>
        </Tooltip>
      </div>
    </Paper>
  );
};
export default ThreadCard;
