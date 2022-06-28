import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../@types/posts";
import Post from "../components/Post";

export default function Detail() {
  const id = useParams();
  const [post, setPost] = useState<IPost>();
  const [loading, setLoading] = useState(true);

  const writePost = () => {
    if (!post) return;
    return <Post post={post} />;
  };

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
        {loading ? <p>Loading ... </p> : writePost()}
      </div>
    </main>
  );
}
