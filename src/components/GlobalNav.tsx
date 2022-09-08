import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BoxArrowRight,
  BoxArrowInRight,
  List,
  PencilSquare,
  PersonCircle,
} from "react-bootstrap-icons";
import useAuthStore from "../store/useAuthStore";
import deleteCookie from "../utils/delete-cookie";
import { GlobalNavProps } from "../@types/GlobalNav";
import "./GlobalNav.css";

export default function GlobalNav({ setShowDrawer }: GlobalNavProps) {
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
    if (!setShowDrawer) {
      return;
    }

    setShowDrawer((prev) => !prev);
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
        <Link to="/" className="nav__head">
          Sinfroad
        </Link>
        <div className="nav__control">
          {isMobile ? (
            <List className="nav__item" onClick={handleClick} />
          ) : (
            <>
              {user?.role === "ADMIN" && (
                <Link className="nav__item" to="/posts">
                  <PencilSquare />
                </Link>
              )}
              {user ? (
                <>
                  <Link className="nav__item" to="/users">
                    <PersonCircle />
                  </Link>
                  <Link className="nav__item" to="/" onClick={handleLogout}>
                    <BoxArrowRight />
                  </Link>
                </>
              ) : (
                <Link className="nav__item" to="/login">
                  <BoxArrowInRight />
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
