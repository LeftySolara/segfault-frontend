import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "hooks/reduxHooks";
import {
  logout,
  selectUsername,
} from "store/authentication/authentication.slice";

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const username = useSelector(selectUsername);

  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="login">Login</Link>
        <Link to="signup">Signup</Link>
      </div>
      <div>
        <button onClick={() => dispatch(logout())} type="button">
          Log Out
        </button>
      </div>
      <div>{username ? `Logged in as ${username}` : "Not logged in"}</div>
    </div>
  );
};

export default HomePage;
