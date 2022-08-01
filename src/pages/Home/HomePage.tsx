import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "hooks/reduxHooks";
import { useLogoutMutation } from "services/auth";
import { clearUser } from "store/auth/auth.slice";

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();

  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="login">Login</Link>
        <Link to="signup">Signup</Link>
      </div>
      <div>
        <button
          type="button"
          onClick={async () => {
            await logout().unwrap();
            dispatch(clearUser());
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default HomePage;
