import { useEffect, useState, useRef, useCallback } from "react";
import { IPost } from "../@types/posts";
import { getPosts } from "../api/posts";
import Postcard from "../components/Postcard";
import Loading from "./Loading";

export default function Home() {
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState<number>(1);
  const [hasNext, setHasNext] = useState<boolean>(true);

  const loader = useRef<HTMLDivElement>(null);

  // FIXME: hasNext is falsy, page don't increase.
  const getPostsRequest = async (page: number) => {
    const { posts, pagination } = await getPosts(page);

    setPosts((prev) => prev.concat(posts));
    setHasNext(pagination.hasNext);
    setLoading(false);
  };

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];

    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    if (!hasNext) {
      return;
    }

    getPostsRequest(page);
  }, [page]);

  useEffect(() => {
    if (!loader.current) {
      return;
    }

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "10px",
      threshold: 0,
    });

    observer.observe(loader.current);
  }, []);

  return (
    <main className="main">
      <div className="container">
        {loading
          ? Loading()
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
      <div ref={loader}></div>
    </main>
  );
}
