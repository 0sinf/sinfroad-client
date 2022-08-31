import { useState, useEffect } from "react";
import { getComments } from "../api/comments";
import toast from "../utils/toast";
import { IComment } from "../@types/comments";
import { CommentForm } from "./CommentForm";
import { Comment } from "./Comment";
import "./CommentList.css";

export function CommentList({ postId }: { postId: string }) {
  // TODO: Control  overflow
  const [comments, setComments] = useState<IComment[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasNext, setHasNext] = useState<boolean>(false);

  const getCommentsRequest = async () => {
    const { response, data } = await getComments(postId, page);

    if (!response.ok) {
      toast(data.message);
      return;
    }

    const { comments, pagination } = data;

    setHasNext(pagination.hasNext);
    setComments((prev) => [...prev, ...comments]);
  };

  const refreshComments = (commentId: string) => {
    setComments((comments) =>
      comments.filter((comment) => comment.id !== commentId)
    );
  };

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    getCommentsRequest();
  }, [page]);

  return (
    <>
      <CommentForm postId={postId} setComments={setComments} />
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            refreshComments={refreshComments}
          />
        );
      })}
      {hasNext && (
        <button className="comment__more" onClick={handleClick}>
          더보기
        </button>
      )}
    </>
  );
}
