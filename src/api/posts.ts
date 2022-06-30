export async function getPosts() {
  const data = await (
    await fetch(`${import.meta.env.VITE_API_SERVER_URI}/posts`)
  ).json();

  return data;
}

export async function getPost(postId: string) {
  const data = await (
    await fetch(`${import.meta.env.VITE_API_SERVER_URI}/posts/${postId}`)
  ).json();

  return data;
}

export async function createPost(
  formData: FormData,
  token: string | undefined
) {
  const response = await fetch(`${import.meta.env.VITE_API_SERVER_URI}/posts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return response;
}
