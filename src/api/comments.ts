import fetcher from "../utils/fetcher";

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
