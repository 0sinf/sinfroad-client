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
    <div className="post">
      <Link to={`/posts/${id}`}>
        <figure>
          <img className="post__img" src={image} alt={title} />
        </figure>
        <article className="post__description">
          <h2 className="post__title">{title}</h2>
          <div className="post__created">{date}</div>
        </article>
      </Link>
    </div>
  );
}
