import { Link } from "react-router-dom";
import "./GlobalNav.css";
import useAuthStore from "../store/useAuthStore";
import deleteCookie from "../utils/delete-cookie";

export default function GlobalNav() {
  const { user, setUser } = useAuthStore();

  const onDeleteUser = () => {
    localStorage.removeItem("access-token");
    deleteCookie();
    setUser();
    window.location.reload();
  };

  return (
    <div className="nav">
      <div className="nav__items">
        <Link to="/" className="nav__item--head">
          Sinfroad
        </Link>
        <div className="nav__item">
          {user?.role === "ADMIN" && <Link to="/posts">새 글 쓰기</Link>}
          {user ? (
            <Link to="/" onClick={onDeleteUser}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
        {/* // TODO: Use icon  */}
      </div>
    </div>
  );
}
