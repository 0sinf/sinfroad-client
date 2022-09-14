import { ArrowUpCircleFill } from "react-bootstrap-icons";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const root = document.documentElement;

  const handleClick = () => {
    root.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <ArrowUpCircleFill className="scrollToTop" onClick={handleClick} />;
}
