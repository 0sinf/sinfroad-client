import { FormEvent, useState } from "react";
import { Input } from "./Input";
import Button from "./Button";
import { createComment } from "../api/comments";
import toast from "../utils/toast";

export function CommentForm({ postId }: { postId: string }) {
  const [contents, setContents] = useState<string>("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { response } = await createComment(postId, contents);

    if (!response.ok) {
      toast("댓글이 작성되지 못했어요. 🥲");
      return;
    }

    setContents("");
  };

  return (
    <form className="comment__form" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="comment"
        value={contents}
        className="comment__input"
        placeholder="댓글을 입력해주세요! 👏🏻"
        setValue={setContents}
        withLabel={false}
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
