import React from "react";

import SignupForm from "./SignupForm/SignupForm";
import usePageStyles from "./SignupPage.styles";

import "assets/fonts.css";

const SignupPage = (): JSX.Element => {
  const { classes } = usePageStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Welcome Aboard</h1>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
