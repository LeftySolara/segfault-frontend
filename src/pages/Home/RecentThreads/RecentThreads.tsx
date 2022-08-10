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
      <ThreadCard title="Testing" />
    </div>
  );
};

export default RecentThreads;
