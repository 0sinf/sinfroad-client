import { ChangeEvent, FormEvent } from "react";
import "./Write.css";

export default function Write() {
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const onChange = (event: ChangeEvent) => {};

  return (
    <main className="write__container">
      <h1>새 글 작성하기</h1>
      <form className="form" method="POST" onSubmit={onSubmit}>
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
        <div className="form__box">
          <label htmlFor="image">
            <h2>Images</h2>
          </label>
          <input
            className="form__input-image"
            type="file"
            id="image"
            onChange={onChange}
          />
        </div>
        <button className="form__button" type="submit">
          작성하기
        </button>
      </form>
    </main>
  );
}
