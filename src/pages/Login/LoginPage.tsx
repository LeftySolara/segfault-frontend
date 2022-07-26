import React from "react";
import LoginForm from "./LoginForm/LoginForm";

import usePageStyles from "./LoginPage.styles";

const LoginPage = (): JSX.Element => {
  const { classes } = usePageStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Welcome Back</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
