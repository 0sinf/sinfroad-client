export async function getUser(cookieToken: string, savedToken: string | null) {
  const data = await (
    await fetch(`${import.meta.env.VITE_API_SERVER_URI}/users`, {
      headers: { Authorization: `Bearer ${savedToken || cookieToken}` },
    })
  ).json();

  return data;
}
