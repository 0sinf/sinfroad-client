import "./Post.css";

export function Post({ post }: { post: Post }) {
  const date = new Date(post.createdAt).toLocaleDateString("ko-KR");
  return (
    <article className="post">
      <figure className="post__img">
        <img src={post.images[0]} alt={post.title} />
      </figure>
      <div className="post__description">
        <header className="post__title">{post.title}</header>
        <div className="post__date">{date}</div>
        <div className="post__contents">{post.contents}</div>
      </div>
    </article>
  );
}
