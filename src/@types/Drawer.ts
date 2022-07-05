import { Dispatch, SetStateAction } from "react";

export interface DrawerProps {
  showDrawer: boolean;
  setShowDrawer: Dispatch<SetStateAction<boolean>>;
}
