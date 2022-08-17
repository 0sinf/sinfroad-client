import fetcher from "../utils/fetcher";

export async function getPosts(page: number) {
  const { data } = await fetcher(
    `${import.meta.env.VITE_API_SERVER_URI}/posts?page=${page}`
  );

  return data;
}

export async function getPost(postId: string) {
  const { data } = await fetcher(
    `${import.meta.env.VITE_API_SERVER_URI}/posts/${postId}`
  );

  return data;
}

export async function createPost(formData: FormData) {
  const { response, data } = await fetcher(
    `${import.meta.env.VITE_API_SERVER_URI}/posts`,
    {
      method: "POST",
      body: formData,
    }
  );

  return { response, data };
}

export async function updatePost(
  id: string,
  body: {
    title: string;
    contents: string;
    address: string;
  }
) {
  const { response, data } = await fetcher(
    `${import.meta.env.VITE_API_SERVER_URI}/posts/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  return { response, data };
}

export async function deletePost(id: string) {
  const { response, data } = await fetcher(
    `${import.meta.env.VITE_API_SERVER_URI}/posts/${id}`,
    {
      method: "DELETE",
    }
  );

  return { response, data };
}

export async function addLike(id: string) {
  const { response, data } = await fetcher(
    `${import.meta.env.VITE_API_SERVER_URI}/likes`,
    {
      method: "POST",
      body: {
        postId: id,
      },
    }
  );

  return { response, data };
}

export async function removeLike(id: string) {
  const { response, data } = await fetcher(
    `${import.meta.env.VITE_API_SERVER_URI}/likes`,
    {
      method: "DELETE",
      body: {
        postId: id,
      },
    }
  );

  return { response, data };
}
