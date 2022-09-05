import fetcher from "../utils/fetcher";
import { getQuery } from "../utils/query";

export async function createComment(postId: string, contents: string) {
  const body = {
    postId,
    contents,
  };

  const { response, data } = await fetcher(
    `${import.meta.env.VITE_API_SERVER_URI}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  return { response, data };
}

export async function getComments(postId: string, page: number) {
  const query = getQuery({ postId, page });

  const { response, data } = await fetcher(
    `${import.meta.env.VITE_API_SERVER_URI}/comments${query}`
  );

  return { response, data };
}

export async function deleteComment(commentId: string) {
  const { response, data } = await fetcher(
    `${import.meta.env.VITE_API_SERVER_URI}/comments/${commentId}`,
    { method: "DELETE" }
  );

  return { response, data };
}
