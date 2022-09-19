import "./Login.css";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <a
      href={`${import.meta.env.VITE_API_SERVER_URI}/auth/google`}
      className="google"
    />
  );
}
