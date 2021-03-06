import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "pages/Home/HomePage";
import LoginPage from "pages/Login/LoginPage";
import SignupPage from "pages/Signup/SignupPage";

const routes = (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="signup" element={<SignupPage />} />
  </Routes>
);

const App = (): JSX.Element => {
  return routes;
};

export default App;
