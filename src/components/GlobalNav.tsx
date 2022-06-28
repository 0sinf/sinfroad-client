import { Link } from "react-router-dom";
import "./GlobalNav.css";

export default function GlobalNav() {
  return (
    <div className="nav">
      <div className="nav__items">
        <Link to="/" className="nav__item">
          Sinfroad
        </Link>
        {/* // FIXME: Fix url */}
        <Link to="/login" className="nav__item">
          Login
        </Link>
      </div>
    </div>
  );
}
