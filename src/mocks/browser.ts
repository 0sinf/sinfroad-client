import { setupWorker } from "msw";
import { posts } from "./handlers";

export const worker = setupWorker(...posts);
