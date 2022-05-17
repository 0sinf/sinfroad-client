import { useCallback, useEffect, useState } from "react";
import "./Home.css";
import { PostCard } from "../components/PostCard";

export function Home() {
  const [posts, setPosts] = useState<PostInList[]>();

  const getPosts = useCallback(() => {
    if (!posts) {
      return;
    }

    return posts.map((post, idx) => {
      return <PostCard key={idx} post={post} />;
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

  return <main className="main">{getPosts()}</main>;
}
