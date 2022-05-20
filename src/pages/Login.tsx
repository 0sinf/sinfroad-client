import "./Login.css";

export default function Login() {
  return (
    <>
      <form className="form">
        <div className="form__box">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" />
        </div>
        <div className="form__box">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <button className="form__button" type="submit">
          로그인
        </button>
      </form>
    </>
  );
}
