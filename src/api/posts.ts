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

export async function updatePost(
  id: string,
  body: {
    title: string;
    contents: string;
    address: string;
  },
  token?: string
) {
  const response = await fetch(
    `${import.meta.env.VITE_API_SERVER_URI}/posts/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  return response;
}
