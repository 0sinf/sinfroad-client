import { FormEvent } from "react";
import { IComment } from "../@types/comments";
import getDatetime from "../utils/get-date";
import "./Comment.css";

export function Comment({ comment }: { comment: IComment }) {
  const { id, contents, author, isOwner, created } = comment;

  // TODO: Add delete form
  const handleDelete = async (event: FormEvent) => {
    event.preventDefault();
  };

  const date = getDatetime(created);

  return (
    <div className="comment__container">
      <div className="comment__main">
        <div className="comment__author">{author}</div>
        <div className="comment__contents">{contents}</div>
      </div>
      <div className="comment__meta">
        <div className="comment__date">{date}</div>
        {isOwner && (
          <form
            className="comment__form"
            method="DELETE"
            onSubmit={handleDelete}
          >
            <button className="comment__delete" type="submit">
              삭제하기
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
