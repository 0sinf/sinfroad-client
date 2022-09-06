import { Link } from "react-router-dom";
import "./Postcard.css";

export function Postcard({
  id,
  title,
  created,
  image,
}: {
  id: string;
  title: string;
  created: string;
  image: string;
}) {
  const date = new Date(created).toLocaleDateString("ko-KR");

  return (
    <div className="postcard">
      <Link to={`/posts/${id}`}>
        {/* TODO: other size image can be aligned */}
        <figure>
          <img className="postcard__img" src={image} alt={title} />
        </figure>
        <article className="postcard__description">
          <h2 className="postcard__title">{title}</h2>
          <div className="postcard__created">{date}</div>
        </article>
      </Link>
    </div>
  );
}

export function PostcardSkeleton() {
  return (
    <div className="postcard postcard-skeleton">
      <div className="postcard__img postcard__img-skeleton"></div>
      <div className="postcard__description-skeleton">
        <div className="postcard__title-skeleton"></div>
        <div className="postcard__created-skeleton"></div>
      </div>
    </div>
  );
}
