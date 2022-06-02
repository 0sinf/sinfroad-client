import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Post } from "../components/Post";
import "./PostDetail.css";

export function PostDetail() {
  const [post, setPost] = useState<Post>();
  const { id } = useParams();

  const token = window.localStorage.getItem("token");

  const go = useNavigate();

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

  async function onDelete() {
    // TODO: confirm modal
    if (!confirm("정말로 삭제하시겠습니까?")) {
      return;
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_SERVER_URI}/posts/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      // TODO: toast message
      return;
    }

    // TODO: success message
    go("/");
  }

  return (
    <main className="main">
      {token ? (
        <div className="post__control">
          <button>
            <Link to={`/posts/update/${id}`} state={post}>
              수정하기
            </Link>
          </button>

          <button onClick={onDelete}>삭제하기</button>
        </div>
      ) : (
        ""
      )}
      {getPost()}
    </main>
  );
}
