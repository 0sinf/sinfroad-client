import { IPost } from "../@types/posts";

import "./Post.css";
import Carousel from "./Carousel";

export default function Post({
  post: { title, contents, address, created, updated, images },
}: {
  post: IPost;
}) {
  const date = new Date(created).toLocaleDateString("ko-KR");

  return (
    <div className="post">
      <Carousel title={title} images={images} />

      <article className="post__description">
        <h1 className="post__title">{title}</h1>
        <div className="post__date">{date}</div>
        <div className="post__address">{address}</div>
        <div className="post__contents">{contents}</div>
      </article>
    </div>
  );
}
