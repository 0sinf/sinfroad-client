import Carousel from "./Carousel";
import "./Post.css";

export function Post({ post }: { post: Post }) {
  const date = new Date(post.createdAt).toLocaleDateString("ko-KR");
  return (
    <article className="post">
      {/* TODO: To be carousel */}
      <Carousel images={post.images} />

      <div className="post__description">
        <header className="post__title">{post.title}</header>
        <div className="post__date">{date}</div>
        <div className="post__contents">{post.contents}</div>
      </div>
    </article>
  );
}
