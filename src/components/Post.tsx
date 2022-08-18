import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { IPost } from "../@types/posts";
import Carousel from "./Carousel";
import Button from "./Button";
import useAuthStore from "../store/useAuthStore";
import { addLike, deletePost, removeLike } from "../api/posts";
import toast from "../utils/toast";
import "./Post.css";

export default function Post({ post }: { post: IPost }) {
  const { user } = useAuthStore();
  const go = useNavigate();

  const { id, title, contents, address, created, images, beliked, likes } =
    post;
  const date = new Date(created).toLocaleDateString("ko-KR");

  const [liked, setLiked] = useState(beliked);
  const [count, setCount] = useState(likes);

  const handleClickLike = async () => {
    if (liked) {
      const { response, data } = await removeLike(id);

      if (!response.ok) {
        toast(data);
      }

      setCount((prev) => prev - 1);
    } else {
      const { response, data } = await addLike(id);

      if (!response.ok) {
        toast(data);
      }

      setCount((prev) => prev + 1);
    }

    setLiked((prev) => !prev);
  };

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
          <svg
            width="20"
            height="20"
            className={liked ? "post__heart post__heart--fill" : "post__heart"}
            onClick={handleClickLike}
          >
            <path d="M 10 7.55 L 7.5 4.925 L 5 4.925 L 2.5 7.55 L 2.5 10.175 L 2.5 11.75 L 5 14.375 L 7.5 17 L 10 19.625 L 12.5 17 L 15 14.375 L 17.5 11.75 L 17.5 10.175 L 17.5 7.55 L 15 4.925 L 12.5 4.925 L 10 7.55" />
          </svg>
          <span>{count}</span>
        </div>
        <div className="post__address">{address}</div>
        <div className="post__contents">{contents}</div>
      </article>
    </div>
  );
}
