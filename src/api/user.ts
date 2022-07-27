import { AxiosError } from "axios";
import axiosClient from "./axiosClient";

/**
 * Send an HTTP request to log in an existing user
 *
 * @param {string} email - The user's email address
 * @param {string} password - The user's password
 *
 * @returns A promise containing response data
 */
const loginUser = async (email: string, password: string) => {
  let res;
  try {
    res = await axiosClient.post(
      "/auth/login",
      { email, password },
      { withCredentials: true },
    );
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      res = err.response;
    }
  }

  return res;
};

/**
 * Send an HTTP request to create a new user account
 *
 * @param {string} username - The new user's username
 * @param {string} email - The new user's email address
 * @param {string} password - The new user's password
 * @param {string} confirmPassword - The new user's password (again)
 *
 * @returns A promise containing response data
 */
const signupUser = async (
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
) => {
  let res;
  try {
    res = await axiosClient.post("/users", {
      username,
      email,
      password,
      confirmPassword,
    });
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      res = err.response;
    }
  }

  return res;
};

export { loginUser, signupUser };
