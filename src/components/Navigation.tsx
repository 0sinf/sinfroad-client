import "./Navigation.css";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="nav__box">
      <Link to="/" className="nav__items">
        Sinfroad
      </Link>
    </nav>
  );
}
