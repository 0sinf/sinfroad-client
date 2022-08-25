import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import { IPost } from "../@types/posts";
import Carousel from "./Carousel";
import useAuthStore from "../store/useAuthStore";
import { addLike, deletePost, removeLike } from "../api/posts";
import toast from "../utils/toast";
import { Heart } from "./Heart";
import { PostControl } from "./PostControl";
import "./Post.css";

export default function Post({ post }: { post: IPost }) {
  const { user } = useAuthStore();
  const go = useNavigate();

  const { id, title, contents, address, created, images, beliked, likes } =
    post;
  const date = new Date(created).toLocaleDateString("ko-KR");

  const [liked, setLiked] = useState(beliked);
  const [count, setCount] = useState(likes);

  const [show, setShow] = useState(false);

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

  const handleClickLink = async () => {
    const link = document.URL;

    await navigator.clipboard.writeText(link);

    toast("Copied it!");
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
          <PostControl id={id} post={post} handleDelete={handleDelete} />
        ) : (
          ""
        )}
        <h1 className="post__title">{title}</h1>
        <div className="post__date">{date}</div>
        <div className="post__action">
          <Heart
            liked={liked}
            count={count}
            handleClickLike={handleClickLike}
          />
          <BoxArrowUpRight className="post__link" onClick={handleClickLink} />
        </div>
        <div className="post__address">{address}</div>
        {/* // TODO: When contenst length over than 50, use toggle for hide */}
        <div className="post__contents">
          <span>{contents.slice(0, 30)}</span>
          <span>
            {show ? (
              contents.slice(30)
            ) : (
              <div className="post__contents--more">... 더보기</div>
            )}
          </span>
        </div>
      </article>
    </div>
  );
}
