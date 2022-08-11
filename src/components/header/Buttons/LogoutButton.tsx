import React from "react";
import { Text, UnstyledButton } from "@mantine/core";

import { useAppDispatch } from "hooks/reduxHooks";
import { useLogoutMutation } from "services/auth";
import { clearUser } from "store/auth/auth.slice";

import useLogoutButtonStyles from "./LogoutButton.styles";

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();

  const { classes } = useLogoutButtonStyles();

  return (
    <UnstyledButton
      type="button"
      onClick={async () => {
        await logout().unwrap();
        dispatch(clearUser());
      }}
    >
      <Text className={classes.button}>Log Out</Text>
    </UnstyledButton>
  );
};

export default LogoutButton;
