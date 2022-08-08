import React from "react";
import { Link } from "react-router-dom";
import { Group, Header, Text } from "@mantine/core";

import useHeaderStyles from "./PageHeader.styles";

const PageHeader = () => {
  const { classes } = useHeaderStyles();

  return (
    <Header height={102} p="xs" className={classes.header}>
      <Text component={Link} to="/" className={classes.title}>
        Segfault
      </Text>
      <Group noWrap className={classes["link-group"]}>
        <Text component={Link} to="/signup" className={classes.link}>
          Sign Up
        </Text>
        <Text component={Link} to="/login" className={classes.link}>
          Log In
        </Text>
      </Group>
    </Header>
  );
};

export default PageHeader;
