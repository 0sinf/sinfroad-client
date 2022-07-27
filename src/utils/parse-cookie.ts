export default function parseCookie() {
  const { cookie } = document;

  if (!cookie) {
    return {};
  }

  return Object.fromEntries(
    cookie
      .split(";")
      .map((x) => x.trim().split("="))
      .map(([key, value]) => [
        decodeURIComponent(key),
        decodeURIComponent(value),
      ])
  );
}
