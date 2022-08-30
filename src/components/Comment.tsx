import { IComment } from "../@types/comments";
import "./Comment.css";

export function Comment({ comment }: { comment: IComment }) {
  const { id, contents, author, isOwner, created } = comment;

  // FIXME: Fix time format
  // TODO: Add delete form
  const createdDate = new Date(created);

  return (
    <div className="comment__container">
      <div className="comment__main">
        <div className="comment__author">{author}</div>
        <div className="comment__contents">{contents}</div>
      </div>
      <div className="comment__meta">
        <div className="comment__date">
          {createdDate.toLocaleString("ko-KR")}
        </div>
      </div>
    </div>
  );
}
