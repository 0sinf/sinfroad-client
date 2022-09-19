import { ArrowUpCircleFill } from "react-bootstrap-icons";
import { useCallback, useEffect, useState } from "react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const root = document.documentElement;
  const [isTop, setIsTop] = useState<boolean>(true);

  const handleClick = () => {
    root.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = useCallback(() => {
    setIsTop(window.scrollY < 400);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <button
      type="button"
      className={
        isTop
          ? "scroll-to-top scroll-to-top--cover"
          : "scroll-to-top scroll-to-top--reveal"
      }
      onClick={handleClick}
    >
      {" "}
      <ArrowUpCircleFill />
    </button>
  );
}
