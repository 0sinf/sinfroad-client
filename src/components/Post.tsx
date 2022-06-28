import { IPost } from "../@types/posts";

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
        <img className="post__img" src={images[0]} alt={title} />
      </figure>
      <article className="post__description">
        <h1>{title}</h1>
        <div>{contents}</div>
        <div>{address}</div>
        <div>{date}</div>
      </article>
    </div>
  );
}
