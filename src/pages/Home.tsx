import { useCallback, useEffect, useState, useRef } from "react";
import "./Home.css";
import { PostCard } from "../components/PostCard";

export function Home() {
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<PostInList[]>([]);

  const loader = useRef<HTMLDivElement>(null);

  //TODO: page 계속 올라가는 문제
  async function fetchPosts() {
    const res = await fetch(
      `${import.meta.env.VITE_API_SERVER_URI}/posts?page=${page}`,
      {
        method: "GET",
      }
    );
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
      <div className="container">
        {posts.length ? (
          posts.map((post, idx) => {
            return <PostCard key={idx} post={post} />;
          })
        ) : (
          <p>"Dev..."</p>
        )}
      </div>
      <div ref={loader} />
    </main>
  );
}
