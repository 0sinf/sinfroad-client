import "./Heart.css";

export function Heart({
  liked,
  handleClickLike,
}: {
  liked: boolean;
  handleClickLike: () => Promise<void>;
}) {
  return (
    <svg
      width="20"
      height="20"
      className={liked ? "heart heart--fill" : "heart"}
      onClick={handleClickLike}
    >
      <path d="M 10 7.55 L 7.5 4.925 L 5 4.925 L 2.5 7.55 L 2.5 10.175 L 2.5 11.75 L 5 14.375 L 7.5 17 L 10 19.625 L 12.5 17 L 15 14.375 L 17.5 11.75 L 17.5 10.175 L 17.5 7.55 L 15 4.925 L 12.5 4.925 L 10 7.55" />
    </svg>
  );
}
