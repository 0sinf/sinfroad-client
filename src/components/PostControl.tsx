import { Link } from "react-router-dom";
import { FormEvent } from "react";
import Button from "./Button";
import { IPost } from "../@types/posts";
import "./PostControl.css";

export function PostControl({
  id,
  post,
  handleDelete,
}: {
  id: string;
  post: IPost;
  handleDelete: (event: FormEvent) => void;
}) {
  return (
    <div className="post__control">
      <Link to={`/posts/update/${id}`} state={post}>
        <Button value="수정하기" size="small" />
      </Link>
      <form method="DETELE" onSubmit={handleDelete}>
        <Button
          type="submit"
          value="삭제하기"
          btnStyle="secondary"
          size="small"
        />
      </form>
    </div>
  );
}
