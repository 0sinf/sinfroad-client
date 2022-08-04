import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IPost } from "../@types/posts";
import { getPost } from "../api/posts";
import Post from "../components/Post";
import toast from "../utils/toast";
import Loading from "../components/Loading";

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
      toast("Doesn't exist post!");
      return;
    }

    const data = await getPost(id);

    if (!data.post) {
      return;
    }

    setPost(data.post);
    setLoading(false);
  };

  useEffect(() => {
    callPost();
  }, []);

  return <main className="main">{loading ? Loading() : writePost()}</main>;
}
