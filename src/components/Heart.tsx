import "./Heart.css";
import toast from "../utils/toast";

export function Heart({
  liked,
  count,
  disabled,
  handleClickLike,
}: {
  liked: boolean;
  count: number;
  disabled: boolean;
  handleClickLike: () => Promise<void>;
}) {
  return (
    <div>
      {disabled ? (
        <svg
          width="30"
          height="20"
          className="heart--disabled"
          onClick={() => {
            toast("로그인이 필요한 서비스입니다.");
          }}
        >
          <path d="M 10 7.55 L 7.5 4.925 L 5 4.925 L 2.5 7.55 L 2.5 10.175 L 2.5 11.75 L 5 14.375 L 7.5 17 L 10 19.625 L 12.5 17 L 15 14.375 L 17.5 11.75 L 17.5 10.175 L 17.5 7.55 L 15 4.925 L 12.5 4.925 L 10 7.55" />
        </svg>
      ) : (
        <button className="heart__container">
          <svg
            width="30"
            height="20"
            className={liked ? "heart heart--fill" : "heart heart--empty"}
            onClick={handleClickLike}
          >
            <path d="M 10 7.55 L 7.5 4.925 L 5 4.925 L 2.5 7.55 L 2.5 10.175 L 2.5 11.75 L 5 14.375 L 7.5 17 L 10 19.625 L 12.5 17 L 15 14.375 L 17.5 11.75 L 17.5 10.175 L 17.5 7.55 L 15 4.925 L 12.5 4.925 L 10 7.55" />
          </svg>
        </button>
      )}
      <span>{count}</span>
    </div>
  );
}
