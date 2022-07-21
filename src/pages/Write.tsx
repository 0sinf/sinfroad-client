import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { createPost, updatePost } from "../api/posts";
import { Input, Textarea } from "../components/Input";
import Button from "../components/Button";
import Preview from "../components/Preivew";
import { IPost } from "../@types/posts";
import toast from "../utils/toast";
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
      toast("Check your images ext name");
      return;
    }

    setImages((x) => [...x, file]);
  };

  const createPostReqeust = async () => {
    const formData = new FormData();

    if (images.length < 1) {
      toast("Count of images should be more than 1");
      return;
    }

    if (images.length > 4) {
      toast("Count of images should be less than 5");
      return;
    }

    formData.set("title", title);
    formData.set("contents", contents);
    formData.set("address", address);
    images.forEach((image) => formData.append("images", image));

    const response = await createPost(formData, token);

    if (!response.ok) {
      toast((await response.json()).body.message);
      return;
    }

    go("/");
  };

  const updatePostRequest = async () => {
    if (!id) {
      toast("Doesn't exist post!");
      return;
    }

    const body = { title, contents, address };
    const response = await updatePost(id, body, token);

    if (!response.ok) {
      toast((await response.json()).body.message);
      return;
    }

    go(`/posts/${id}`);
  };

  useEffect(() => {
    if (!token) {
      toast("Should be signed");
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

        {!isUpdating && (
          <Input type="file" name="image" handleUpload={handleChangeImage} />
        )}
        {!isUpdating && images.length > 0 && <Preview images={images} />}

        {isUpdating ? (
          <Button value="수정하기" type="submit" />
        ) : (
          <Button value="작성하기" type="submit" />
        )}
        <Button
          value="취소하기"
          type="button"
          btnStyle="secondary"
          onClick={() => {
            go(id ? `/posts/${id}` : "/");
          }}
        />
      </form>
    </main>
  );
}
