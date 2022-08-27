import { useState, FormEvent } from "react";
import { Input } from "./Input";
import Button from "./Button";
import "./Comment.css";

export function Comment({ postId }: { postId: string }) {
  // TODO: Comment form
  // TODO: Comment list
  // TODO: Comment more

  const [comment, setComment] = useState<string>("");
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className="comment__form" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="comment"
        value={comment}
        className="comment__input"
        placeholder="댓글을 입력해주세요! 👏🏻"
        setValue={setComment}
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
