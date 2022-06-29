import create from "zustand";
import { Store } from "../@types/store";
import parseCookie from "../utils/parse-cookie";

const useStore = create<Store>((set) => ({
  token: localStorage.getItem("access-token") || parseCookie()["acess-token"],
}));

export default useStore;
