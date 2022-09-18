interface Query {
  [key: string]: string | number | boolean;
}

export function getQuery(queries: Query) {
  return `?${Object.entries(queries)
    .map((pair) => pair.map(encodeURIComponent).join("="))
    .join("&")}`;
}
