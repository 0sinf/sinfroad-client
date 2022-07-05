import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Button from "./Button";
import useAuthStore from "../store/useAuthStore";
import deleteCookie from "../utils/delete-cookie";
import { DrawerProps } from "../@types/Drawer";
import "./Drawer.css";

export default function Drawer({ showSidebar, setShowSidebar }: DrawerProps) {
  // TODO: Should be closed when do anything
  const { user, setUser } = useAuthStore();
  const sidebar = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    deleteCookie();
    setUser();
    window.location.reload();
  };

  const handleClick = () => {
    setShowSidebar((x) => !x);
  };

  const handleSidebar = () => {
    // TODO: Is it correct?
    const { current } = sidebar;

    if (!current) {
      return;
    }

    if (showSidebar) {
      current.style.left = "40%";
      return;
    }

    current.style.left = "100%";
  };

  useEffect(handleSidebar, [showSidebar]);

  return (
    <div className="sidebar" ref={sidebar}>
      {/* FIXME: Fix icon */}
      <Button onClick={handleClick} value="X"></Button>

      {/* FIXME: duplicate with nav */}
      <ul className="sidebar__items">
        {user?.role === "ADMIN" && (
          <Link className="sidebar__item" to="/posts">
            새 글 쓰기
          </Link>
        )}
        {user ? (
          <Link className="sidebar__item" to="/" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <Link className="sidebar__item" to="/login">
            Login
          </Link>
        )}
      </ul>
    </div>
  );
}
