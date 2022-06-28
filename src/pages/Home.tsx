import { useEffect, useState } from "react";
import { IPost } from "../@types/posts";
import Postcard from "../components/Postcard";

export default function Home() {
  const [posts, setPosts] = useState<Array<IPost>>([]);
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
    <main className="main">
      <div className="container">
        {loading ? (
          <p>Loading ... </p>
        ) : (
          posts.map(({ id, title, created, images }) => (
            <Postcard
              key={id}
              id={id}
              title={title}
              created={created}
              image={images[0]}
            />
          ))
        )}
      </div>
    </main>
  );
}
