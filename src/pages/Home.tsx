import { useEffect, useState } from "react";
import { Post } from "../@types/posts";

export default function Home() {
  // TODO: Write Post card

  const [posts, setPosts] = useState<Array<Post>>([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    const data = await (
      await fetch(`${import.meta.env.VITE_API_SERVER_URI}/posts`)
    ).json();

    setPosts(data.posts);
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading ... </p>
      ) : (
        posts.map((post) => <div key={post.title}>{post.title}</div>)
      )}
    </>
  );
}
