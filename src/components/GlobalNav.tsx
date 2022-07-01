import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import deleteCookie from "../utils/delete-cookie";
import { GlobalNavProps } from "../@types/GlobalNav";
import "./GlobalNav.css";

export default function GlobalNav({
  isMobile,
  setShowSidebar,
}: GlobalNavProps) {
  const { user, setUser } = useAuthStore();

  const onDeleteUser = () => {
    localStorage.removeItem("access-token");
    deleteCookie();
    setUser();
    window.location.reload();
  };

  const handleClick = () => {
    if (!setShowSidebar) {
      return;
    }

    setShowSidebar((x) => !x);
  };

  return (
    <div className="nav">
      <div className="nav__items">
        <Link to="/" className="nav__item--head">
          Sinfroad
        </Link>
        {isMobile ? (
          <div className="nav__item">
            <button onClick={handleClick}>=</button>
          </div>
        ) : (
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
        )}
        {/* // TODO: Use icon  */}
        {/* // TODO: Add Sidebar */}
      </div>
    </div>
  );
}
