import { IComment } from "../@types/comments";
import "./Comment.css";
import getDatetime from "../utils/get-date";

export function Comment({ comment }: { comment: IComment }) {
  const { id, contents, author, isOwner, created } = comment;

  // TODO: Add delete form
  const date = getDatetime(created);

  return (
    <div className="comment__container">
      <div className="comment__main">
        <div className="comment__author">{author}</div>
        <div className="comment__contents">{contents}</div>
      </div>
      <div className="comment__meta">
        <div className="comment__date">{date}</div>
      </div>
    </div>
  );
}
