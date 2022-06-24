import { rest } from "msw";

export const handler = [
  rest.get(`${import.meta.env.VITE_API_SERVER_URI}/posts`, (_, res, ctx) => {
    res(ctx.status(200), ctx.json({}));
  }),
];
