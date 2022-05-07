import "./Navigation.css";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="nav__box">
      <Link to="/" className="nav__items">
        Sinfroad
      </Link>
      <Link to="/posts" className="nav__items">
        <button className="button">글쓰기</button>
      </Link>
    </nav>
  );
}
