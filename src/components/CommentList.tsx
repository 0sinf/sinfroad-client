import { useState, useEffect } from "react";
import { getComments } from "../api/comments";
import toast from "../utils/toast";
import { IComment } from "../@types/comments";
import { CommentForm } from "./CommentForm";
import { Comment } from "./Comment";
import "./Comment.css";

export function CommentList({ postId }: { postId: string }) {
  // TODO: Comment list
  // TODO: Comment more
  const [comments, setComments] = useState<IComment[]>([]);
  const [page, setPage] = useState<number>(1);

  const getCommentsRequest = async () => {
    const { response, data } = await getComments(postId, page);

    if (!response.ok) {
      toast(data.message);
      return;
    }

    setComments((prev) => [...prev, ...data.comments]);
  };

  useEffect(() => {
    getCommentsRequest();
  }, []);

  return (
    <>
      <CommentForm postId={postId} />
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </>
  );
}
