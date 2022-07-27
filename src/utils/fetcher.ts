import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import parseCookie from "./parse-cookie";

interface Token {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

interface FetchConfig {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  headers?: {
    Authorization?: string;
    "Content-Type"?: string;
  };
  body?: any;
}

async function refresh() {
  const refreshToken = parseCookie()["refresh-token"];
  console.log(refreshToken);
  const response = await fetch(
    `${import.meta.env.VITE_API_SERVER_URI}/auth/refresh`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );

  const data = await response.json();

  document.cookie = `access-token=${data.accessToken};`;
  localStorage.setItem("access-token", data.accessToken);
}

export default async function fetcher(url: string, config: FetchConfig = {}) {
  const accessToken = localStorage.getItem("access-token");

  if (!accessToken) {
    const response = await fetch(url, config);
    const data = response.json();
    return { response, data };
  }

  const user = jwtDecode(accessToken) as Token;
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (isExpired) {
    await refresh();
  }

  config["headers"] = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  };

  const response = await fetch(url, config);
  const data = await response.json();
  return { response, data };
}
