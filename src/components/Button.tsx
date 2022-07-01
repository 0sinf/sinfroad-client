import { ButtonProps } from "../@types/Button";
import "./Button.css";

export default function Button({
  value,
  type = "button",
  btnStyle = "primary",
  disabled,
  size = "medium",
}: ButtonProps) {
  return (
    <button
      className={`button button--${btnStyle} button--${size}`}
      type={type}
      disabled={disabled}
    >
      {value}
    </button>
  );
}
