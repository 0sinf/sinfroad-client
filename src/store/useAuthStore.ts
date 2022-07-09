import create from "zustand";
import { AuthStore } from "../@types/AuthStore";
import { getUser } from "../api/users";
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

    getUser(savedToken, cookieToken)
      .then((data) => set((x) => ({ ...x, user: data.user })))
      .catch(() => {});
  },
  setUser: (user = undefined) => {
    set((x) => ({ ...x, user }));
  },
}));

export default useAuthStore;
