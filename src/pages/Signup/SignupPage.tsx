import React from "react";
import { createStyles } from "@mantine/core";
import SignupForm from "./SignupForm/SignupForm";

import "assets/fonts.css";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "36px",
  },
  heading: {
    color: theme.colors["cool-grey"][7],
    fontWeight: 500,
  },
}));

const SignupPage = (): JSX.Element => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Welcome Aboard</h1>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
