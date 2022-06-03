import create from "zustand";

export const useStore = create<AuthStore>((set) => ({
  token: localStorage.getItem("token") || undefined,
  setToken: () => {
    const token = localStorage.getItem("token") || undefined;
    set((x) => ({ ...x, token }));
  },
}));
