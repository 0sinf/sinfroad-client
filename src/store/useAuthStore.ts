import create from "zustand";
import { AuthStore } from "../@types/AuthStore";
import parseCookie from "../utils/parse-cookie";

const useAuthStore = create<AuthStore>((set) => ({
  token: localStorage.getItem("access-token") || parseCookie()["access-token"],
  initialize: () => {
    const savedToken = localStorage.getItem("access-token");
    const cookieToken = parseCookie()["access-token"];

    if (!savedToken && !!cookieToken) {
      localStorage.setItem("access-token", cookieToken);
    }

    if (!savedToken && !cookieToken) {
      return;
    }

    fetch(`${import.meta.env.VITE_API_SERVER_URI}/users`, {
      headers: { Authorization: `Bearer ${savedToken || cookieToken}` },
    })
      .then((response) => {
        if (!response.ok) {
          return;
        }
        return response.json();
      })
      .then((data) => set((x) => ({ ...x, user: data.user })))
      .catch(() => {});
  },
  setUser: (user = undefined) => {
    set((x) => ({ ...x, user }));
  },
}));

export default useAuthStore;
