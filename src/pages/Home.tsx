import { useCallback, useEffect, useState } from "react";

export function Home() {
  const [posts, setPosts] = useState<PostInList[]>();

  const getPosts = useCallback(() => {
    if (!posts) {
      console.log("Loading data...💾");
      return;
    }
  }, [posts]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("http://localhost:3001/api/posts", {
        method: "GET",
      });
      const data = await res.json();
      setPosts(data.posts);
    }

    fetchPosts();
  }, []);

  return <>{getPosts()}</>;
}
