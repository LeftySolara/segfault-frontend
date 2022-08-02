/* eslint-disable import/prefer-default-export */
import { rest } from "msw";

export const handlers = [
  rest.post("/example", (req, res, ctx) => {
    console.log("POSTing to /example");

    return res(ctx.status(200));
  }),
  rest.get("/example", (req, res, ctx) => {
    console.log("GETing /example");

    return res(ctx.status(200), ctx.json({ message: "Get Request" }));
  }),
];
