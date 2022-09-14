import { ArrowUpCircleFill } from "react-bootstrap-icons";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const handleClick = () => {
    const root = document.documentElement;

    root.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <ArrowUpCircleFill className="scrollToTop" onClick={handleClick} />;
}
