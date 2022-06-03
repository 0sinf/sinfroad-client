import "./Login.css";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "../utils/toast";
import { useStore } from "../store/index";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const go = useNavigate();

  const { setToken } = useStore();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const response = await fetch(
      `${import.meta.env.VITE_API_SERVER_URI}/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      const data = await response.json();
      toast(data.message);
      return;
    }
    const data = await response.json();

    window.localStorage.setItem("token", data.token);
    setToken();
    setEmail("");
    setPassword("");
    go("/");
  }

  return (
    <>
      <form className="form" method="POST" onSubmit={handleSubmit}>
        <div className="form__box">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="form__button" type="submit">
          로그인
        </button>
      </form>
    </>
  );
}
