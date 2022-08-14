import { Box, Table, Text } from "@mantine/core";
import React from "react";
import { useGetThreadsByBoardQuery } from "services/thread";
import useThreadListStyles from "./ThreadList.styles";

interface ThreadListProps {
  boardId: string;
}

interface ThreadTopicProps {
  topic: string;
  author: string;
}

const ThreadTopic = (props: ThreadTopicProps) => {
  const { topic, author } = props;

  return (
    <div>
      <Text>{topic}</Text>
      <Text>by {author}</Text>
    </div>
  );
};

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
        <td>
          <ThreadTopic topic={thread.topic} author={thread.author.username} />
        </td>
        <td>{thread.posts.length}</td>
        <td>{new Date(thread.lastPost).toLocaleString()}</td>
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
