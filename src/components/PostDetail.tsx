import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./PostDetail.css";
import { PostRes } from "../types/post";
import { Carousel } from "./Carousel";

export function PostDetail() {
  const { id } = useParams();
  const [response, setResponse] = useState<PostRes>();

  const getPost = useCallback(() => {
    if (response && response.data.images) {
      const images = response.data.images.map((image) => image.url);
      const date = new Date(response.data.created).toLocaleString("ko-KR");
      return (
        <div className="post__detail">
          <Carousel images={images} />
          <div className="post__detail-box">
            <div className="post__detail-title">{response.data.title}</div>
            <div className="post__detail-created">{date}</div>
            <div className="post__detail-contents">
              {response.data.contents}
            </div>
          </div>
        </div>
      );
    }
    return <div>Loading...</div>;
  }, [response]);

  useEffect(() => {
    async function getPost() {
      const response = await fetch(`http://localhost:3001/posts/${id}`);
      setResponse(await response.json());
    }

    getPost();
  }, []);

  return <div>{getPost()}</div>;
}
