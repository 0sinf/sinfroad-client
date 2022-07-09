import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../@types/posts";
import { getPost } from "../api/posts";
import Post from "../components/Post";

export default function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState<IPost>();
  const [loading, setLoading] = useState(true);

  const writePost = () => {
    if (!post) return;
    return <Post post={post} />;
  };

  const callPost = async () => {
    if (!id) {
      // TODO: Error message
      return;
    }

    const data = await getPost(id);

    setPost(data.post);
    setLoading(false);
  };

  useEffect(() => {
    callPost();
  }, []);

  return (
    <main className="main">{loading ? <p>Loading ... </p> : writePost()}</main>
  );
}
