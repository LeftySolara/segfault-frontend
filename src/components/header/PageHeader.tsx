import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Header, Text } from "@mantine/core";

import { selectCurrentUser } from "store/auth/auth.slice";

import LogoutButton from "./Buttons/LogoutButton";
import AuthLinkGroup from "./Links/AuthLinkGroup";

import useHeaderStyles from "./PageHeader.styles";

const PageHeader = () => {
  const { classes } = useHeaderStyles();

  const currentUser = useSelector(selectCurrentUser);

  return (
    <Header height={102} p="xs" className={classes.header}>
      <Text component={Link} to="/" className={classes.title}>
        Segfault
      </Text>
      {currentUser ? <LogoutButton /> : <AuthLinkGroup />}
    </Header>
  );
};

export default PageHeader;
