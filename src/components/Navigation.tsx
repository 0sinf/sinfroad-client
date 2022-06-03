import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
import { useStore } from "../store/index";

export function Navigation() {
  const go = useNavigate();

  const { token, setToken } = useStore();

  function handleClick() {
    window.localStorage.removeItem("token");
    setToken();
    go("/");
  }

  return (
    <nav className="nav">
      <Link to="/" className="nav__items">
        Sinfroad
      </Link>
      {token ? (
        <div>
          <Link to="/posts" className="nav__items-small">
            새 글 쓰기
          </Link>
          <Link to="/" className="nav__items-small" onClick={handleClick}>
            로그아웃
          </Link>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
