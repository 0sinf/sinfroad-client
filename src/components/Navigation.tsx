import { Link } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__items">
        Sinfroad
      </Link>
      <Link to="/login" className="nav__items">
        Login
      </Link>
    </nav>
  );
}
