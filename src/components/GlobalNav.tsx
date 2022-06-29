import { Link } from "react-router-dom";
import "./GlobalNav.css";
import useAuthStore from "../store/useAuthStore";
import deleteCookie from "../utils/delete-cookie";

export default function GlobalNav() {
  const token = useAuthStore.getState().token;

  const onDeleteUser = () => {
    localStorage.removeItem("access-token");
    deleteCookie();
    window.location.reload();
  };

  return (
    <div className="nav">
      <div className="nav__items">
        <Link to="/" className="nav__item">
          Sinfroad
        </Link>
        {/* // TODO: Use icon  */}
        {token ? (
          <Link to="/" className="nav__item" onClick={onDeleteUser}>
            Logout
          </Link>
        ) : (
          <Link to="/login" className="nav__item">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
