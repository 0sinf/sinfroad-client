import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import deleteCookie from "../utils/delete-cookie";
import "./GlobalNav.css";

export default function GlobalNav() {
  const { user, setUser } = useAuthStore();

  const [navWidth, setNavWidth] = useState<number>(0);
  const nav = useRef<HTMLDivElement>(null);

  const onDeleteUser = () => {
    localStorage.removeItem("access-token");
    deleteCookie();
    setUser();
    window.location.reload();
  };

  const onResize = () => {
    const { current } = nav;

    if (!current) {
      return;
    }

    setNavWidth(current.offsetWidth);
  };

  useEffect(() => {
    onResize();

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="nav" ref={nav}>
      <div className="nav__items">
        <Link to="/" className="nav__item--head">
          Sinfroad
        </Link>
        {navWidth > 660 ? (
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
        ) : (
          <div className="nav__item">
            <button>=</button>
          </div>
        )}
        {/* // TODO: Use icon  */}
        {/* // TODO: Add Sidebar */}
      </div>
    </div>
  );
}
