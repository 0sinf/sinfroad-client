import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Post } from "../components/Post";

export function PostDetail() {
  const [post, setPost] = useState<Post>();
  const { id } = useParams();

  const getPost = useCallback(() => {
    if (!post) {
      console.log("Loading data...💾");
      return;
    }

    return <Post post={post} />;
  }, [post]);

  useEffect(() => {
    console.log(id);
    async function fetchPost() {
      const res = await fetch(`http://localhost:3001/api/posts/${id}`, {
        method: "GET",
      });
      const data = await res.json();
      setPost(data.post);
    }

    fetchPost();
  }, []);

  return <article className="post">{getPost()}</article>;
}
