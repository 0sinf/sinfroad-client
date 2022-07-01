import {
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  TextareaHTMLAttributes,
} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;

  onUpload?: (event) => void;
}
export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
