import { useState } from "react";
import { BoxArrowUpRight, Chat } from "react-bootstrap-icons";
import { IPost } from "../@types/posts";
import Carousel from "./Carousel";
import useAuthStore from "../store/useAuthStore";
import { addLike, removeLike } from "../api/posts";
import toast from "../utils/toast";
import { Heart } from "./Heart";
import { PostControl } from "./PostControl";
import { PostContents } from "./PostContents";
import { Comment } from "./Comment";
import "./Post.css";

export default function Post({ post }: { post: IPost }) {
  const { user } = useAuthStore();

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

  const handleClickLink = async () => {
    const link = document.URL;

    await navigator.clipboard.writeText(link);

    toast("Copied it!");
  };

  return (
    <div className="post">
      <Carousel title={title} images={images} />

      <article className="post__description">
        {user?.role === "ADMIN" ? <PostControl id={id} post={post} /> : ""}
        <h1 className="post__title">{title}</h1>
        <div className="post__date">{date}</div>
        <div className="post__action">
          <Heart
            liked={liked}
            count={count}
            handleClickLike={handleClickLike}
          />
          <Chat className="post__chat" />
          <BoxArrowUpRight className="post__link" onClick={handleClickLink} />
        </div>
        <div className="post__address">{address}</div>
        <PostContents contents={contents} />
        <Comment postId={id} />
      </article>
    </div>
  );
}
