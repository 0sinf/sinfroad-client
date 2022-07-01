import { IPost } from "../@types/posts";
import Carousel from "./Carousel";
import Button from "./Button";

import "./Post.css";

export default function Post({
  post: { title, contents, address, created, updated, images },
}: {
  post: IPost;
}) {
  const date = new Date(created).toLocaleDateString("ko-KR");

  return (
    <div className="post">
      <Carousel title={title} images={images} />

      <article className="post__description">
        <div className="post__control">
          <Button value="수정하기" size="small" />
          <Button value="삭제하기" btnStyle="secondary" size="small" />
        </div>
        <h1 className="post__title">{title}</h1>
        <div className="post__date">{date}</div>
        <div className="post__address">{address}</div>
        <div className="post__contents">{contents}</div>
      </article>
    </div>
  );
}
