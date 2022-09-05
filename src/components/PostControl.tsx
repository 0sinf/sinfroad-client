import { Link, useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import Button from "./Button";
import { IPost } from "../@types/posts";
import { deletePost } from "../api/posts";
import toast from "../utils/toast";
import "./PostControl.css";

export function PostControl({ id, post }: { id: string; post: IPost }) {
  const go = useNavigate();

  const handleDelete = async (event: FormEvent) => {
    event.preventDefault();

    if (!confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    const { response, data } = await deletePost(id);

    if (!response.ok) {
      toast(data.message);
      return;
    }

    go("/");
  };

  return (
    <div className="post__control">
      <Link to={`/posts/update/${id}`} state={post}>
        <Button
          value="수정하기"
          size="small"
          className="post__control-button"
        />
      </Link>
      <form method="DETELE" onSubmit={handleDelete}>
        <Button
          type="submit"
          value="삭제하기"
          btnStyle="secondary"
          size="small"
          className="post__control-button"
        />
      </form>
    </div>
  );
}
