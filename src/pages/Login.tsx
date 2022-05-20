import "./Login.css";
import { FormEvent, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const response = await fetch(
      `${import.meta.env.VITE_API_SERVER_URI}/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (response.status !== 200) {
      //TODO: Toast message
      return;
    }
  }

  return (
    <>
      <form className="form" method="POST" onSubmit={handleSubmit}>
        <div className="form__box">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
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
