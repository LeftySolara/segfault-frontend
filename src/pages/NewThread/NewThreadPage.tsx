import React from "react";
import { Title } from "@mantine/core";
import useNewThreadPageStyles from "./NewThreadPage.styles";

const NewThreadPage = () => {
  const { classes } = useNewThreadPageStyles();

  return (
    <div>
      <Title order={1} className={classes.title}>
        New Thread
      </Title>
    </div>
  );
};

export default NewThreadPage;
