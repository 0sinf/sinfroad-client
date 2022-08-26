import { useState } from "react";
import "./PostContents.css";

export function PostContents({ contents }: { contents: string }) {
  const [show, setShow] = useState(false);

  const handleClickToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <div
        className={
          show ? "post__contents post__contents--more" : "post__contents"
        }
      >
        {contents}
      </div>
      {show ? (
        <span className="post__toggle" onClick={handleClickToggle}>
          간략히
        </span>
      ) : (
        <span className="post__toggle" onClick={handleClickToggle}>
          ...더보기
        </span>
      )}
    </>
  );
}
