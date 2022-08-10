import React from "react";
import { Title } from "@mantine/core";

import useRecentThreadsStyles from "./RecentThreads.styles";

const RecentThreads = () => {
  const { classes } = useRecentThreadsStyles();

  return (
    <Title order={3} className={classes.title}>
      Recent Threads
    </Title>
  );
};

export default RecentThreads;
