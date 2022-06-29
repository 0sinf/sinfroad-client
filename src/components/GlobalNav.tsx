import { Link } from "react-router-dom";
import "./GlobalNav.css";
import useAuthStore from "../store/useAuthStore";

export default function GlobalNav() {
  const token = useAuthStore.getState().token;

  return (
    <div className="nav">
      <div className="nav__items">
        <Link to="/" className="nav__item">
          Sinfroad
        </Link>
        {token ? (
          ""
        ) : (
          <Link to="/login" className="nav__item">
            {/* // TODO: Use icon  */}
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
