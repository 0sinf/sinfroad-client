import { ChangeEvent, InputHTMLAttributes } from "react";
import "./Input.css";

export default function Input({
  type,
  name,
  text,
  placeholder,
  setValue,
}: {
  type: string;
  name: string;
  text: string;
  placeholder: string;
  setValue: (value: string) => void;
}) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <div className="input__container">
      <label htmlFor={name}>
        <h2>Title</h2>
      </label>
      <input
        className="input"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={text}
        onChange={onChange}
      />
    </div>
  );
}
