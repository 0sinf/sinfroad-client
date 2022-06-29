import { rest } from "msw";

export const auths = [
  rest.get(
    `${import.meta.env.VITE_API_SERVER_URI}/auth/google`,
    (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.cookie("access-token", "access"),
        ctx.cookie("refresh-token", "refresh")
      );
    }
  ),
];
