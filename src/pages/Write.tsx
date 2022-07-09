import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { createPost, updatePost } from "../api/posts";
import { Input, Textarea } from "../components/Input";
import Button from "../components/Button";
import { IPost } from "../@types/posts";
import "./Write.css";

export default function Write() {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);

  const location = useLocation();
  const isUpdating = !!location.state;

  const { token } = useAuthStore();
  const go = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (isUpdating) {
      updatePostRequest();
      return;
    }

    createPostReqeust();
  };

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files.item(0) as File;

    if (!file) {
      return;
    }

    if (!file.type.match(/\/(jpg|jpeg|png)$/)) {
      // TODO: Error
      return;
    }

    setImages((x) => [...x, file]);
  };

  const createPostReqeust = async () => {
    const formData = new FormData();

    if (images.length < 1 || images.length > 4) {
      // TODO: Error
      return;
    }

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

  const updatePostRequest = async () => {
    if (!id) {
      // TODO: Error message
      return;
    }

    const body = { title, contents, address };
    const response = await updatePost(id, body, token);

    if (!response.ok) {
      // TODO: Error message
      return;
    }

    go(`/posts/${id}`);
  };

  useEffect(() => {
    if (!token) {
      // TODO: error message
      go("/login");
    }

    const state = location.state as IPost;

    if (!isUpdating) {
      return;
    }

    setTitle(state.title);
    setContents(state.contents);
    setAddress(state.address);
  }, []);

  return (
    <main className="write__container">
      <h1>새 글 작성하기</h1>
      <form className="form" method="POST" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Write title"
          value={title}
          setValue={setTitle}
        />

        <Textarea
          name="contents"
          placeholder="Write contents"
          value={contents}
          setValue={setContents}
        />

        <Input
          type="text"
          name="address"
          placeholder="Write address"
          value={address}
          setValue={setAddress}
        />

        {isUpdating ? (
          ""
        ) : (
          <Input type="file" name="image" handleUpload={handleChangeImage} />
        )}

        {isUpdating ? (
          <Button value="수정하기" type="submit" />
        ) : (
          <Button value="작성하기" type="submit" />
        )}
      </form>
    </main>
  );
}
