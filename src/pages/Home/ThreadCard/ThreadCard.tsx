import React from "react";
import { Paper, Text, Tooltip } from "@mantine/core";

import { formatDistance } from "date-fns";

import useThreadCardStyles from "./ThreadCard.styles";

interface ThreadCardProps {
  title: string;
  author: string;
  timestamp: Date;
}

const ThreadCard = (props: ThreadCardProps) => {
  const { classes } = useThreadCardStyles();
  const { title, author, timestamp } = props;

  return (
    <Paper className={classes["thread-card"]} p="sm">
      <div>
        <Text className={classes["thread-title"]} lineClamp={2}>
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
