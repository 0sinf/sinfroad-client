import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Input } from "./Input";
import Button from "./Button";
import { createComment } from "../api/comments";
import toast from "../utils/toast";
import "./CommentForm.css";
import { IComment } from "../@types/comments";
import useAuthStore from "../store/useAuthStore";

export function CommentForm({
  postId,
  setComments,
}: {
  postId: string;
  setComments: Dispatch<SetStateAction<IComment[]>>;
}) {
  const [contents, setContents] = useState<string>("");
  const { user } = useAuthStore();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (contents.length < 2) {
      toast("댓글은 최소 2글자 이상 입력해주세요!");
      return;
    }

    const { response, data } = await createComment(postId, contents);

    if (!response.ok) {
      toast("댓글이 작성되지 못했어요. 🥲");
      return;
    }

    setComments((prev) => [data.comment, ...prev]);
    setContents("");
  };

  return (
    <form className="comment__form" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="comment"
        value={contents}
        className="comment__input"
        placeholder={
          !!user ? "댓글을 입력해주세요! 👏🏻" : "로그인이 필요합니다."
        }
        setValue={setContents}
        withLabel={false}
        disabled={!!user ? false : true}
      />
      <Button
        value="작성"
        type="submit"
        disabled={false}
        size="small"
        className="comment__button"
      />
    </form>
  );
}
