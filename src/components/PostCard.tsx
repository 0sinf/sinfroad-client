import "./PostCard.css";
import { Post } from "../types/post";

export function PostCard({ id, title, created }: Partial<Post>) {
  return (
    <div className="post__card">
      <div className="post__image"></div>
      <div className="post__title">{title}</div>
      <div className="post__created">
        {new Date(created as string).toLocaleString("ko-KR")}
      </div>
    </div>
  );
}
