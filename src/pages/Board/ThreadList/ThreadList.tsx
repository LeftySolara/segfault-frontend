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
  const { classes } = useThreadListStyles();

  return (
    <div>
      <Text
        component={Link}
        to={`/thread/${id}`}
        className={classes["topic-text"]}
      >
        {topic}
      </Text>
      <Text className={classes["author-line"]}>
        by{" "}
        <Text inherit component="span" className={classes.author}>
          {author}
        </Text>
      </Text>
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
      <th>
        <Text className={classes["table-header"]}>Topic</Text>
      </th>
      <th>
        <Text className={classes["table-header"]}>Replies</Text>
      </th>
      <th>
        <Text className={classes["table-header"]}>Last Post</Text>
      </th>
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
        <td>
          <Text className={classes["reply-count"]}>
            {thread.posts.length - 1}
          </Text>
        </td>
        <td>
          <Text className={classes["last-post"]}>
            {new Date(thread.lastPost).toLocaleString()}
          </Text>
        </td>
      </tr>
    );
  });

  return (
    <Box>
      <Table striped verticalSpacing="xs">
        <thead>{tableHeaders}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
};

export default ThreadList;
