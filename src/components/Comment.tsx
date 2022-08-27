import { useState, FormEvent } from "react";
import { Input } from "./Input";
import Button from "./Button";

export function Comment() {
  // TODO: Comment form
  // TODO: Comment list
  // TODO: Comment more

  const [comment, setComment] = useState<string>("");
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(comment);
  };

  return (
    <form className="comment__form" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="comment"
        value={comment}
        placeholder="댓글을 입력해주세요! 👏🏻"
        setValue={setComment}
        withLabel={false}
      />
      <Button value="작성" type="submit" disabled={false} />
    </form>
  );
}
