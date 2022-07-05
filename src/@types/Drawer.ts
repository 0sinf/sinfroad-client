import { Dispatch, SetStateAction } from "react";

export interface DrawerProps {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}
