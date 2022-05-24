import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  const go = useNavigate();

  function handleClick() {
    window.localStorage.removeItem("token");
    go("/");
  }

  return (
    <nav className="nav">
      <Link to="/" className="nav__items">
        Sinfroad
      </Link>
      {window.localStorage.getItem("token") ? (
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
