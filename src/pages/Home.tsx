import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { IPost } from "../@types/posts";
import { getPosts } from "../api/posts";
import { Postcard, PostcardSkeleton } from "../components/Postcard";
import Loading from "../components/Loading";
import ScrollToTop from "../components/ScrollToTop";

const SKELETON_LENGTH = 6;

export default function Home() {
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState<number>(1);
  const [hasNext, setHasNext] = useState(true);

  const loader = useRef<HTMLDivElement>(null);

  const getPostsRequest = useCallback(async (page: number) => {
    setLoading(true);

    const { posts, pagination } = await getPosts(page);

    setPosts((prev) => [...prev, ...posts]);
    setHasNext(pagination.hasNext);
    setLoading(false);
  }, []);

  useEffect(() => {
    getPostsRequest(page);
  }, [page]);

  useEffect(() => {
    if (!loader.current || !hasNext) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [target] = entries;

        if (!target.isIntersecting) {
          return;
        }

        setPage((prev) => prev + 1);
      }
    );

    observer.observe(loader.current);

    return () => {
      observer.disconnect();
    };
  }, [loader.current]);

  return (
    <main className="main">
      <div className="container">
        {!loading && !posts.length && <div>아직 글이 없습니다.</div>}
        {loading && !posts.length
          ? Array.from({ length: SKELETON_LENGTH }).map((_, idx) => (
              <PostcardSkeleton key={idx} />
            ))
          : posts.map(({ id, title, created, images }) => (
              <Postcard
                key={id}
                id={id}
                title={title}
                created={created}
                image={images[0].url}
              />
            ))}
      </div>
      {loading ? Loading() : <div ref={loader}></div>}
      <ScrollToTop />
    </main>
  );
}
