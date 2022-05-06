import { useCallback, useEffect, useState } from "react";
import "./PostList.css";
import { Post, PostListRes } from "../types/post";
import { PostCard } from "./PostCard";

export function PostList() {
  const [response, setResponse] = useState<PostListRes>();

  const posts = useCallback(() => {
    if (response) {
      if (response?.data.length === 0) {
        return <p>아직 아무런 글이 없어요</p>;
      }
      return (response?.data as Array<Post>).map((post, idx) => (
        <PostCard
          key={idx}
          id={post.id}
          title={post.title}
          contents={post.contents}
          created={post.created}
        />
      ));
    }
  }, [response]);

  useEffect(() => {
    async function getPostList() {
      const response = await fetch("http://localhost:3001/posts", {
        method: "GET",
      });

      const result = await response.json();
      setResponse(result);
    }

    getPostList();
  }, []);

  return <div className="post__list">{posts()}</div>;
}
