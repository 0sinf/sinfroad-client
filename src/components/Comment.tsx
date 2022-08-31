import { FormEvent } from "react";
import { IComment } from "../@types/comments";
import { deleteComment } from "../api/comments";
import getDatetime from "../utils/get-date";
import "./Comment.css";
import toast from "../utils/toast";

export function Comment({
  comment,
  refreshComments,
}: {
  comment: IComment;
  refreshComments: (commentId: string) => void;
}) {
  const { id, contents, author, isOwner, created } = comment;

  const handleDelete = async (event: FormEvent) => {
    event.preventDefault();

    const { response } = await deleteComment(id);

    if (!response.ok) {
      toast("댓글이 삭제되지 않았습니다.");
      return;
    }

    refreshComments(id);
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
