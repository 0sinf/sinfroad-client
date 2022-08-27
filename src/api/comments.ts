import fetcher from "../utils/fetcher";

export async function createComment(postId: string, contents: string) {
  const { response, data } = await fetcher(
    `${import.meta.env.VITE_API_SERVER_URI}/comments`,
    {
      method: "POST",
      body: JSON.stringify({
        postId,
        contents,
      }),
    }
  );

  return { response, data };
}
