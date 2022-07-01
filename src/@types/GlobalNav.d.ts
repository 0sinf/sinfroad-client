import { Dispatch, SetStateAction } from "react";

export interface GlobalNavProps {
  isMobile?: boolean;
  setShowSidebar?: Dispatch<SetStateAction<boolean>>;
}
