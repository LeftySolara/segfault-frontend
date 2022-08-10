import React from "react";
import { Title } from "@mantine/core";

import useRecentThreadsStyles from "./RecentThreads.styles";
import ThreadCard from "../ThreadCard/ThreadCard";

const RecentThreads = () => {
  const { classes } = useRecentThreadsStyles();

  return (
    <div className={classes.container}>
      <Title order={3} className={classes.title}>
        Recent Threads
      </Title>
      <ThreadCard
        title="This is a test thread with a very long title so that we can test the line clamp and see if the text overflows"
        author="LeftySolara"
        timestamp={new Date("2022-08-09T17:51:34.397Z")}
      />
    </div>
  );
};

export default RecentThreads;
