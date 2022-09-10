import { IUser } from "./users";

export interface AuthStore {
  initialize: () => void;
  token?: string;
  user?: IUser;
  setUser: (user: IUser | undefined) => void;
}
