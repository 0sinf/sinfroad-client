import { useEffect, useState } from "react";
import { IPost } from "../@types/posts";
import { getPosts } from "../api/posts";
import Postcard from "../components/Postcard";

export default function Home() {
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const [loading, setLoading] = useState(true);

  const getPostsRequest = async () => {
    const data = await getPosts();

    setPosts(data.posts);
    setLoading(false);
  };

  // TODO: pagination

  useEffect(() => {
    getPostsRequest();
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
              image={images[0].url}
            />
          ))
        )}
      </div>
    </main>
  );
}
