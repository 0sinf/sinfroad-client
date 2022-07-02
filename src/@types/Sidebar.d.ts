import { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}
