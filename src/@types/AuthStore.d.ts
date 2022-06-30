export interface AuthStore {
  token?: string;
  initialize: () => void;
}
