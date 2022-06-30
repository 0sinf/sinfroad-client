import { setupWorker } from "msw";
import { posts, users } from "./handlers";

export const worker = setupWorker(...posts, ...users);
