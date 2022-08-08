import React from "react";
import { Link } from "react-router-dom";
import { Group, Text } from "@mantine/core";

import useAuthLinkStyles from "./AuthLinkGroup.styles";

const AuthLinkGroup = () => {
  const { classes } = useAuthLinkStyles();

  return (
    <Group noWrap className={classes["link-group"]}>
      <Text component={Link} to="/signup" className={classes.link}>
        Sign Up
      </Text>
      <Text component={Link} to="/login" className={classes.link}>
        Log In
      </Text>
    </Group>
  );
};

export default AuthLinkGroup;
