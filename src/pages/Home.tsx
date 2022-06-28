import { useEffect, useState } from "react";
import { Post } from "../@types/posts";
import Postcard from "../components/Postcard";

import "./Home.css";

export default function Home() {
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
    <div className="container">
      {loading ? (
        <p>Loading ... </p>
      ) : (
        posts.map(({ title, created, images }) => (
          <Postcard
            key={title}
            title={title}
            created={created}
            image={images[0]}
          />
        ))
      )}
    </div>
  );
}
