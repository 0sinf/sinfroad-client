import { setupWorker } from "msw";
import { posts } from "./handlers/posts";

export const worker = setupWorker(...posts);
