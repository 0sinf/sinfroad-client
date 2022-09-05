interface Query {
  [key: string]: string | number | boolean;
}

export function getQuery(querys: Query) {
  return `?${Object.entries(querys)
    .map((pair) => pair.map(encodeURIComponent).join("="))
    .join("&")}`;
}
