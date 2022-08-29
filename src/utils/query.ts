interface Query {
  [key: string]: unknown;
}

export function getQuery(querys: Query) {
  return `?${Object.entries(querys)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")}`;
}
