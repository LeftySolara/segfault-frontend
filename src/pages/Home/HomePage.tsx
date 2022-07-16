import React from "react";
import { Link } from "react-router-dom";

const HomePage = (): JSX.Element => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="login">Login</Link>
        <Link to="signup">Signup</Link>
      </div>
    </div>
  );
};

export default HomePage;
