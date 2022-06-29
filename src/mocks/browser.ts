import { setupWorker } from "msw";
import { posts, auths } from "./handlers";

export const worker = setupWorker(...posts, ...auths);
