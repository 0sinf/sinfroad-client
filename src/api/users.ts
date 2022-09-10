import fetcher from "../utils/fetcher";

export async function getUser() {
  const { data } = await fetcher(
    `${import.meta.env.VITE_API_SERVER_URI}/users`
  );

  return data;
}

export async function updateUsername(username: string) {
  const { response, data } = await fetcher(
    `${import.meta.env.VITE_API_SERVER_URI}/users`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ name: username }),
    }
  );

  return { response, data };
}
