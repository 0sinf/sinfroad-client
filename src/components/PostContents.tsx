import { useState } from "react";
import "./PostContents.css";

export function PostContents({ contents }: { contents: string }) {
  const MAX_PREVIOUS_SHOW = 50;

  const [show, setShow] = useState(false);

  const handleClickToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="post__contents">
      <span>{contents.slice(0, MAX_PREVIOUS_SHOW)}</span>
      <span>
        {contents.length < MAX_PREVIOUS_SHOW || show ? (
          contents.slice(MAX_PREVIOUS_SHOW)
        ) : (
          <span className="post__contents--more" onClick={handleClickToggle}>
            ... 더보기
          </span>
        )}
      </span>
    </div>
  );
}
