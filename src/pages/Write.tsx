import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import "./Write.css";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/posts";

export default function Write() {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);

  const go = useNavigate();
  const { token } = useAuthStore();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // TODO: Check images length

    const formData = new FormData();

    formData.set("title", title);
    formData.set("contents", contents);
    formData.set("address", address);
    images.forEach((image) => formData.append("images", image));

    const response = await createPost(formData, token);

    if (!response.ok) {
      // TODO: error message
      return;
    }

    go("/");
  };

  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files.item(0) as File;
    setImages((x) => [...x, file]);
  };

  useEffect(() => {
    if (!token) {
      // TODO: error message
      go("/login");
    }
  }, []);

  return (
    <main className="write__container">
      <h1>새 글 작성하기</h1>
      <form className="form" method="POST" onSubmit={onSubmit}>
        <div className="form__box">
          <label htmlFor="title">
            <h2>Title</h2>
          </label>
          <input
            className="form__input"
            type="text"
            id="title"
            name="title"
            placeholder="Write title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="form__box">
          <label htmlFor="contents">
            <h2>Contents</h2>
          </label>
          <textarea
            className="form__textarea"
            id="contents"
            name="contents"
            placeholder="Write contents"
            value={contents}
            onChange={(event) => setContents(event.target.value)}
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
            placeholder="Write address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
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
            onChange={onChangeImage}
          />
        </div>
        <button className="form__button" type="submit">
          작성하기
        </button>
      </form>
    </main>
  );
}
