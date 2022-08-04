/* eslint-disable import/prefer-default-export */
import {
  rest,
  DefaultBodyType,
  RestContext,
  RestRequest,
  ResponseComposition,
  PathParams,
} from "msw";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const USER_ID = "12345";
const EMAIL_ADDRESS = "hello@example.com";
const USERNAME = "hello";

const handleAuthCheck = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const { token } = req.cookies;

  if (token) {
    return res(
      ctx.status(200),
      ctx.json({ id: USER_ID, email: EMAIL_ADDRESS, username: USERNAME }),
    );
  }
  return res(ctx.status(401));
};

const handleLogin = async (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const body = await req.json();
  let response;

  if (body.email === EMAIL_ADDRESS && body.password === "hello123!") {
    response = res(
      ctx.status(200),
      ctx.cookie("token", "12345678", {
        secure: true,
        sameSite: "none",
        httpOnly: true,
      }),
      ctx.json({ id: USER_ID, email: EMAIL_ADDRESS, username: USERNAME }),
    );
  } else if (
    body.email === EMAIL_ADDRESS &&
    body.password === "wrongpassword"
  ) {
    response = res(
      ctx.status(401),
      ctx.json({ message: "Invalid credentials" }),
    );
  } else {
    response = res(
      ctx.status(500),
      ctx.json({ message: "Internal server error" }),
    );
  }

  return response;
};

const handleSignup = async (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const body = await req.json();
  let response;

  if (body.email === EMAIL_ADDRESS) {
    response = res(
      ctx.status(422),
      ctx.json({ message: "Email already in use" }),
    );
  } else if (body.username === USERNAME) {
    response = res(
      ctx.status(422),
      ctx.json({ message: "Username already in use" }),
    );
  } else {
    response = res(
      ctx.status(201),
      ctx.json({
        username: USERNAME,
        email: EMAIL_ADDRESS,
        id: USER_ID,
        token: "12345678",
      }),
    );
  }

  return response;
};

export const handlers = [
  rest.get(`${API_ENDPOINT}/auth/user`, handleAuthCheck),
  rest.post(`${API_ENDPOINT}/auth/login`, handleLogin),
  rest.post(`${API_ENDPOINT}/users`, handleSignup),
];
