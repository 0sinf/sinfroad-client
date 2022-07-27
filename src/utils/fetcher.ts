import jwtDecode from "jwt-decode";
import dayjs from "dayjs";

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

export default async function fetcher(url: string, config: FetchConfig = {}) {
  const accessToken = localStorage.getItem("access-token");

  if (!accessToken) {
    const response = await fetch(url, config);
    const data = await response.json();
    return { response, data };
  }

  const user = jwtDecode(accessToken) as Token;
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (isExpired) {
    // TODO: refresh token
  }

  config["headers"] = {
    Authorization: `Beaer ${localStorage.getItem("access-token")}`,
  };

  const response = await fetch(url, config);
  const data = await response.json();
  return { response, data };
}
