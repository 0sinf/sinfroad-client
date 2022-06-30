import { rest } from "msw";

export const users = [
  rest.get(
    `${import.meta.env.VITE_API_SERVER_URI}/users/:id`,
    (_, res, ctx) => {
      const user = {
        id: "fad05c41-ead7-432e-8107-bbe783ddd3c9",
        email: "email@email.com",
        name: "name",
        role: "ADMIN",
      };

      return res(ctx.status(200), ctx.json({ user }));
    }
  ),
];
