import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../@types/posts";

export default function Detail() {
  const id = useParams();
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(true);

  const getPost = async () => {
    const data = await (
      await fetch(`${import.meta.env.VITE_API_SERVER_URI}/posts/${id}`)
    ).json();

    setPost(data.post);
    setLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <main className="main">
      <div className="container">
        {loading ? <p>Loading ... </p> : post?.title}
      </div>
    </main>
  );
}
