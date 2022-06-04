import Carousel from "./Carousel";
import "./Post.css";

export function Post({ post }: { post: Post }) {
  const date = new Date(post.createdAt).toLocaleDateString("ko-KR");

  const contents = post.contents
    .split("\n")
    .map((content, idx) => <p key={idx}>{content}</p>);

  return (
    <article className="post">
      <Carousel images={post.images} />

      <header className="post__description">
        <h2 className="post__title">{post.title}</h2>
        <time className="post__date" dateTime={post.createdAt}>
          {date}
        </time>
        <div className="post__contents">{post.address}</div>
        <div className="post__contents">{contents}</div>
      </header>
    </article>
  );
}
