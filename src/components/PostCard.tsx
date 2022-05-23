import { Link } from "react-router-dom";
import "./PostCard.css";

export function PostCard({ post }: { post: PostInList }) {
  const date = new Date(post.createdAt).toLocaleDateString("ko-KR");

  return (
    <article className="card">
      <Link to={`/posts/${post.id}`}>
        <figure className="card__img">
          <img src={post.image} alt={post.title} />
        </figure>
        <header className="card__description">
          <h2 className="card__title">{post.title}</h2>
          <time className="card__date" dateTime={date}>
            {date}
          </time>
        </header>
      </Link>
    </article>
  );
}
