import { useCallback, useEffect, useState, useRef } from "react";
import "./Home.css";
import { PostCard } from "../components/PostCard";

export function Home() {
  const [page, setPage] = useState<number>(1);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostInList[]>([]);

  const loader = useRef<HTMLDivElement>(null);

  //FIXME: loader가 맨위, 맨 아래 둘 다 반응함.
  //FIXME: 가끔 페이지 뒤바뀜
  //FIXME: strict 모드에서 2번씩 불러옴

  async function fetchPosts() {
    const res = await fetch(
      `${import.meta.env.VITE_API_SERVER_URI}/posts?page=${page}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    setHasNext(data.pagination.nextPage);
    setPosts((prev) => [...prev, ...data.posts]);
  }

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];

    if (!hasNext) {
      return;
    }

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
