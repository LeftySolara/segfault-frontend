import React from "react";
import { Title } from "@mantine/core";
import NewThreadForm from "./NewThreadForm/NewThreadForm";
import useNewThreadPageStyles from "./NewThreadPage.styles";

const NewThreadPage = () => {
  const { classes } = useNewThreadPageStyles();

  return (
    <div>
      <Title order={1} className={classes.title}>
        Post New Thread
      </Title>
      <NewThreadForm />
    </div>
  );
};

export default NewThreadPage;
