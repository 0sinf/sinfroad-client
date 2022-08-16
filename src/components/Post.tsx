import { Link, useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { Heart } from "react-bootstrap-icons";
import { IPost } from "../@types/posts";
import Carousel from "./Carousel";
import Button from "./Button";
import useAuthStore from "../store/useAuthStore";
import { deletePost } from "../api/posts";
import toast from "../utils/toast";
import "./Post.css";

export default function Post({ post }: { post: IPost }) {
  const { user } = useAuthStore();
  const go = useNavigate();

  const { id, title, contents, address, created, images } = post;
  const date = new Date(created).toLocaleDateString("ko-KR");

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
    <div className="post">
      <Carousel title={title} images={images} />

      <article className="post__description">
        {user?.role === "ADMIN" ? (
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
        ) : (
          ""
        )}
        <h1 className="post__title">{title}</h1>
        <div className="post__date">{date}</div>
        <div className="post__action">
          <Heart />
        </div>
        <div className="post__address">{address}</div>
        <div className="post__contents">{contents}</div>
      </article>
    </div>
  );
}
