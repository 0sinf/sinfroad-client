import { Link } from "react-router-dom";
import "./Postcard.css";

export default function Postcard({
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
