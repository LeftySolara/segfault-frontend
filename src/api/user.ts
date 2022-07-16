import axiosClient from "./axiosClient";

/**
 * Sends an HTTP request to create a new user account
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
  const res = await axiosClient.post("/users", {
    username,
    email,
    password,
    confirmPassword,
  });

  return res;
};

export default signupUser;
