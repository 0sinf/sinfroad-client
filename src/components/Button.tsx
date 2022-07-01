import { ButtonProps } from "../@types/Button";

export default function Button({ value, type, style, disabled }: ButtonProps) {
  return (
    <button
      className={`button button--${style}`}
      type={type}
      disabled={disabled}
    >
      {value}
    </button>
  );
}
