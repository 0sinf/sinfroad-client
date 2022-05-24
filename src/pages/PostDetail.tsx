import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Post } from "../components/Post";
import "./PostDetail.css";

export function PostDetail() {
  const [post, setPost] = useState<Post>();
  const { id } = useParams();

  const getPost = useCallback(() => {
    if (!post) {
      return;
    }

    return <Post post={post} />;
  }, [post]);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(
        `${import.meta.env.VITE_API_SERVER_URI}/posts/${id}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setPost(data.post);
    }

    fetchPost();
  }, []);

  return (
    <main className="main">
      <div className="post__control">
        <button>
          <Link to={`/posts/update/${id}`} state={post}>
            수정하기
          </Link>
        </button>
      </div>
      {getPost()}
    </main>
  );
}
