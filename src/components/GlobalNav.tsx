import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import deleteCookie from "../utils/delete-cookie";
import { GlobalNavProps } from "../@types/GlobalNav";
import "./GlobalNav.css";

export default function GlobalNav({ setShowSidebar }: GlobalNavProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { user, setUser } = useAuthStore();
  const nav = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
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

  const handleResize = () => {
    const { current } = nav;

    if (!current) {
      return;
    }

    setIsMobile(current.offsetWidth <= 660);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="nav" ref={nav}>
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
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        )}
        {/* // TODO: Use icon  */}
      </div>
    </div>
  );
}
