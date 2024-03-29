import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useCheckIsAuthenticatedQuery } from "services/auth";
import { useAppDispatch } from "hooks/reduxHooks";
import { setCredentials } from "store/auth/auth.slice";

import HomePage from "pages/Home/HomePage";
import LoginPage from "pages/Login/LoginPage";
import SignupPage from "pages/Signup/SignupPage";
import BoardPage from "pages/Board/BoardPage";
import ThreadPage from "pages/Thread/ThreadPage";
import NewThreadPage from "pages/NewThread/NewThreadPage";

const routes = (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="signup" element={<SignupPage />} />
    <Route path="board/:id/newThread" element={<NewThreadPage />} />
    <Route path="board/:id" element={<BoardPage />} />
    <Route path="thread/:id" element={<ThreadPage />} />
  </Routes>
);

const App = (): JSX.Element => {
  const { data: user } = useCheckIsAuthenticatedQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setCredentials({ user }));
    }
  });

  return routes;
};

export default App;
