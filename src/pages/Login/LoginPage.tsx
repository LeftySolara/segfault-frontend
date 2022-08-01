import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { selectCurrentUser } from "store/auth/auth.slice";
import { useAppSelector } from "hooks/reduxHooks";
import LoginForm from "./LoginForm/LoginForm";

import usePageStyles from "./LoginPage.styles";

const LoginPage = (): JSX.Element => {
  const { classes } = usePageStyles();
  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser);

  // Redirect to home page if user already logged in
  useEffect(() => {
    if (user) {
      navigate("/", { replace: false });
    }
  }, []);

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Welcome Back</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
