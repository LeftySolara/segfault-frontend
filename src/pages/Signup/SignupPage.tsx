import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "hooks/reduxHooks";
import { selectCurrentUser } from "store/auth/auth.slice";

import SignupForm from "./SignupForm/SignupForm";
import usePageStyles from "./SignupPage.styles";

const SignupPage = (): JSX.Element => {
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
      <h1 className={classes.heading}>Welcome Aboard</h1>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
