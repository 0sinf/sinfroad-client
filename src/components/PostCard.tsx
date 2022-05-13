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
        <div className="card__description">
          <div className="card__description-title">{post.title}</div>
          <div className="card__description-date">{date}</div>
        </div>
      </Link>
    </article>
  );
}
