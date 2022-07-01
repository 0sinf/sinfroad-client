import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { createPost } from "../api/posts";
import { Input, Textarea } from "../components/Input";
import Button from "../components/Button";
import "./Write.css";

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

        <Input type="file" name="image" onUpload={onChangeImage} />

        <Button style="primary" value="작성하기" type="submit" />
      </form>
    </main>
  );
}
