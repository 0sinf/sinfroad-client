export default function deleteCookie() {
  document.cookie =
    "access-token=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie =
    "refresh-token=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
