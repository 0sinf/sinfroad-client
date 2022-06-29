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

    return;
  },
}));

export default useAuthStore;
