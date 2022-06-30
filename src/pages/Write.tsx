import "./Write.css";

export default function Write() {
  return (
    <main className="write__container">
      <h1>새 글 작성하기</h1>
      <form className="form">
        <div className="form__box">
          <label htmlFor="title">
            <h2>Title</h2>
          </label>
          <input className="form__input" type="text" id="title" name="title" />
        </div>
        <div className="form__box">
          <label htmlFor="contents">
            <h2>Contents</h2>
          </label>
          <textarea
            className="form__textarea"
            id="contents"
            name="contents"
          ></textarea>
        </div>
        <div className="form__box">
          <label htmlFor="address">
            <h2>Address</h2>
          </label>
          <input
            className="form__input"
            type="text"
            id="address"
            name="address"
          />
        </div>
        <button className="form__button" type="submit">
          작성하기
        </button>
      </form>
    </main>
  );
}
