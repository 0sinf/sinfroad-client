export default function parseCookie() {
  const { cookie } = document;

  if (!cookie) {
    return {};
  }

  return Object.fromEntries(
    cookie
      .split(";")
      .map((x) => x.split("="))
      .map(([key, value]) => [
        decodeURIComponent(key),
        decodeURIComponent(value),
      ])
  );
}
