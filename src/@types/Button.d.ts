import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  btnStyle?: string;
  size?: string;
}
