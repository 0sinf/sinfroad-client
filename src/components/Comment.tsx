import { IComment } from "../@types/comments";

export function Comment({ comment }: { comment: IComment }) {
  const { id, contents, author, isOwner, created, updated } = comment;

  return <></>;
}
