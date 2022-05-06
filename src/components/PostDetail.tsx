import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { PostRes } from "../types/post";

export function PostDetail() {
  const { id } = useParams();
  const [response, setResponse] = useState<PostRes>();

  const getPost = useCallback(() => {
    if (response) {
      console.log(response.data);
      return (
        <div>
          <div>{response.data.title}</div>
          <div>{response.data.contents}</div>
          <div>{response.data.images?.map((image) => image.url)}</div>
          <div>{response.data.created}</div>
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
