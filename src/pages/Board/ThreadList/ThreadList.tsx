import { Box, Table } from "@mantine/core";
import React from "react";
import { useGetThreadsByBoardQuery } from "services/thread";
import useThreadListStyles from "./ThreadList.styles";

interface ThreadListProps {
  boardId: string;
}

const ThreadList = (props: ThreadListProps) => {
  const { boardId } = props;
  const { classes } = useThreadListStyles();

  const { data: fetchedThreads } = useGetThreadsByBoardQuery({
    id: boardId,
    sortField: "dateCreated",
    sortDirection: "desc",
    limit: 25,
  });

  if (!fetchedThreads || fetchedThreads.threads.length === 0) {
    return <h3>No threads found</h3>;
  }

  const tableHeaders = (
    <tr>
      <th>Topic</th>
      <th>Posts</th>
      <th>Last Post</th>
    </tr>
  );

  const rows = fetchedThreads.threads.map((thread) => {
    return (
      <tr key={thread.id}>
        <td>{thread.topic}</td>
        <td>{thread.posts.length}</td>
        <td>{thread.lastPost}</td>
      </tr>
    );
  });

  return (
    <Box>
      <Table striped>
        <thead>{tableHeaders}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
};

export default ThreadList;
