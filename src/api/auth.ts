import { AxiosError } from "axios";
import axiosClient from "./axiosClient";

interface AuthCheck {
  isLoggedIn: boolean;
  id: string | undefined;
  email: string | undefined;
  username: string | undefined;
}

const checkAuth = async () => {
  let res;
  const data: AuthCheck = {
    isLoggedIn: false,
    id: undefined,
    email: undefined,
    username: undefined,
  };

  try {
    res = await axiosClient.get("/auth/user", { withCredentials: true });
    if (res.status === 200) {
      data.isLoggedIn = true;
      data.id = res.data.user.id;
      data.email = res.data.user.email;
      data.username = res.data.user.username;
    }
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      return data;
    }
  }

  return data;
};

export default checkAuth;
