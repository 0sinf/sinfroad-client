import fetcher from "../utils/fetcher";

export async function getUser() {
  const { data } = await fetcher(
    `${import.meta.env.VITE_API_SERVER_URI}/users`
  );

  return data;
}
