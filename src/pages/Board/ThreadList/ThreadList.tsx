import React from "react";
import { Box, Table, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { useGetThreadsByBoardQuery } from "services/thread";
import useThreadListStyles from "./ThreadList.styles";

interface ThreadListProps {
  boardId: string;
}

interface ThreadTopicProps {
  topic: string;
  author: string;
  id: string;
}

const ThreadTopic = (props: ThreadTopicProps) => {
  const { topic, author, id } = props;

  return (
    <div>
      <Text component={Link} to={`/thread/${id}`}>
        {topic}
      </Text>
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
      <th>Replies</th>
      <th>Last Post</th>
    </tr>
  );

  const rows = fetchedThreads.threads.map((thread) => {
    return (
      <tr key={thread.id}>
        <td>
          <ThreadTopic
            topic={thread.topic}
            author={thread.author.username}
            id={thread.id}
          />
        </td>
        <td>{thread.posts.length - 1}</td>
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
