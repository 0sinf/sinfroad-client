import { ArrowUpCircleFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
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

  const handleScroll = () => {
    if (window.scrollY < 400) {
      setIsTop(true);
      return;
    }

    setIsTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ArrowUpCircleFill
      className={
        isTop
          ? "scrollToTop scrollToTop-cover"
          : "scrollToTop scrollToTop-reveal"
      }
      onClick={handleClick}
    />
  );
}
