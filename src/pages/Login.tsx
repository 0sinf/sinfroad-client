import "./Login.css";

export default function Login() {
  return (
    <a
      href={`${import.meta.env.VITE_API_SERVER_URI}/auth/google`}
      className="google"
    ></a>
  );
}
