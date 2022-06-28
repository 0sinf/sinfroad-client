import { IPost } from "../@types/posts";

import "./Post.css";

export default function Post({
  post: { title, contents, address, created, updated, images },
}: {
  post: IPost;
}) {
  const date = new Date(created).toLocaleDateString("ko-KR");

  return (
    <div className="post">
      <figure>
        {/* FIXME: Fix Carousel */}
        {/* TODO: Fix setting size for other size images */}
        <img className="post__img" src={images[0]} alt={title} />
      </figure>
      <article className="post__description">
        <h1 className="post__title">{title}</h1>
        <div className="post__date">{date}</div>
        <div className="post__address">{address}</div>
        <div className="post__contents">{contents}</div>
      </article>
    </div>
  );
}
