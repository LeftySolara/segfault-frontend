import React from "react";
import { Title } from "@mantine/core";

import { useGetThreadsQuery } from "services/thread";

import useRecentThreadsStyles from "./RecentThreads.styles";
import ThreadCard from "../ThreadCard/ThreadCard";

const RecentThreads = () => {
  const { classes } = useRecentThreadsStyles();

  const { data: fetchedThreads } = useGetThreadsQuery({
    sortField: "dateCreated",
    sortDirection: "desc",
    limit: 5,
  });

  return (
    <div className={classes.container}>
      <Title order={3} className={classes.title}>
        Recent Threads
      </Title>
      {fetchedThreads &&
        fetchedThreads.threads.map((thread) => (
          <ThreadCard
            title={thread.topic}
            author={thread.author.username}
            timestamp={new Date(thread.dateCreated)}
          />
        ))}
    </div>
  );
};

export default RecentThreads;
