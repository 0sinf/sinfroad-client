import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PostForm() {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [postId, setPostId] = useState<string>();
  const [images, setImages] = useState<File[]>([]);

  const go = useNavigate();

  const location = useLocation();
  const isUpdating = !!location.state;

  async function createRequest() {
    if (images.length <= 0) {
      // TODO: toast message
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("contents", contents);
    formData.append("address", address);
    images.forEach((image) => {
      formData.append("images", image);
    });

    const response = await fetch(
      `${import.meta.env.VITE_API_SERVER_URI}/posts`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      // TODO: toast message
      return;
    }

    go("/");
  }

  async function updateRequest() {
    const response = await fetch(
      `${import.meta.env.VITE_API_SERVER_URI}/posts/${postId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          contents,
          address,
        }),
      }
    );

    if (!response.ok) {
      // TODO: toast message
      return;
    }

    go(`/posts/${postId}`);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (isUpdating) {
      updateRequest();
      return;
    }

    createRequest();
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setImages((x) => {
      if (!event.target.files) {
        return x;
      }
      return [...x, event.target.files[0]];
    });
  }

  useEffect(() => {
    const state = location.state as Post;

    if (!isUpdating) {
      return;
    }

    setTitle(state.title);
    setContents(state.contents);
    setAddress(state.address);
    setPostId(state._id);
  }, []);

  return (
    <>
      <form method="POST" className="form" onSubmit={handleSubmit}>
        <div className="form__box">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            name="title"
            value={title}
            minLength={2}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form__box">
          <label htmlFor="contents">내용</label>
          <input
            type="text"
            name="contents"
            value={contents}
            minLength={2}
            onChange={(e) => setContents(e.target.value)}
          />
        </div>

        <div className="form__box">
          <label htmlFor="address">주소</label>
          <input
            type="text"
            name="address"
            value={address}
            minLength={2}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {isUpdating ? (
          <></>
        ) : (
          <div className="form__box">
            <label htmlFor="images">이미지</label>
            <input type="file" name="images" onChange={handleChange} />
            <input type="file" name="images" onChange={handleChange} />
            <input type="file" name="images" onChange={handleChange} />
            <input type="file" name="images" onChange={handleChange} />
          </div>
        )}

        <button className="form__button" type="submit">
          작성하기
        </button>
      </form>
    </>
  );
}
