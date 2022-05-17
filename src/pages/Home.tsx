import { useCallback, useEffect, useState, useRef } from "react";
import "./Home.css";
import { PostCard } from "../components/PostCard";

export function Home() {
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<PostInList[]>([]);

  const loader = useRef<HTMLDivElement>(null);

  async function fetchPosts() {
    const res = await fetch(`http://localhost:3001/api/posts?page=${page}`, {
      method: "GET",
    });
    const data = await res.json();
    setPosts((prev) => [...prev, ...data.posts]);
  }

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];

    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option: IntersectionObserverInit = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [handleObserver]);

  return (
    <main className="main">
      {posts.map((post, idx) => {
        return <PostCard key={idx} post={post} />;
      })}
      <div ref={loader} />
    </main>
  );
}
