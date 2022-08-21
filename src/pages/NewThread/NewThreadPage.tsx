import React from "react";
import { useParams } from "react-router-dom";
import { Text, Title } from "@mantine/core";
import NewThreadForm from "./NewThreadForm/NewThreadForm";
import useNewThreadPageStyles from "./NewThreadPage.styles";

const NewThreadPage = () => {
  const { classes } = useNewThreadPageStyles();
  const { id } = useParams();

  if (!id) {
    return (
      <div>
        <Text className={classes.title}>Board not found</Text>
      </div>
    );
  }

  return (
    <div>
      <Title order={1} className={classes.title}>
        Post New Thread
      </Title>
      <NewThreadForm boardId={id} />
    </div>
  );
};

export default NewThreadPage;
