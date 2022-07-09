import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import deleteCookie from "../utils/delete-cookie";
import { DrawerProps } from "../@types/Drawer";
import "./Drawer.css";

export default function Drawer({ showDrawer, setShowDrawer }: DrawerProps) {
  const { user, setUser } = useAuthStore();

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    deleteCookie();
    setUser();
    window.location.reload();
  };

  const handleClick = () => {
    setShowDrawer((prev) => !prev);
  };

  return (
    <div
      className={`drawer ${showDrawer ? "drawer--reveal" : ""}`}
      onClick={handleClick}
    >
      <ul className="drawer__items">
        {user?.role === "ADMIN" && (
          <Link className="drawer__item" to="/posts">
            새 글 쓰기
          </Link>
        )}
        {user ? (
          <Link className="drawer__item" to="/" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <Link className="drawer__item" to="/login">
            Login
          </Link>
        )}
      </ul>
    </div>
  );
}
