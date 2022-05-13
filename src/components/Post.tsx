export function Post({ post }: { post: Post }) {
  const date = new Date(post.createdAt).toLocaleString("ko-KR");
  return (
    <article className="post">
      <figure className="">
        <img src={post.images[0]} alt={post.title} />
      </figure>
      <div>
        <div>{post.title}</div>
        <div>{date}</div>
        <div>{post.contents}</div>
      </div>
    </article>
  );
}
