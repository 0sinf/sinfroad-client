import { useCallback, useEffect, useState } from "react";
import { PostCard } from "../components/PostCard";

export function Home() {
  const [posts, setPosts] = useState<PostInList[]>();

  const getPosts = useCallback(() => {
    if (!posts) {
      console.log("Loading data...💾");
      return;
    }

    return posts.map((post) => {
      return <PostCard key={post.title} post={post} />;
    });
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
