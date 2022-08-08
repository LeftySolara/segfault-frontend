import React from "react";
import { Link } from "react-router-dom";
import { Header, Text } from "@mantine/core";

import useHeaderStyles from "./PageHeader.styles";

const PageHeader = () => {
  const { classes } = useHeaderStyles();

  return (
    <Header height={102} p="xs" className={classes.header}>
      <Text component={Link} to="/" className={classes.title}>
        Segfault
      </Text>
    </Header>
  );
};

export default PageHeader;
