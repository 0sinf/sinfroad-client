import { ChangeEvent } from "react";
import "./Input.css";

export function Input({
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
        <h2>{name}</h2>
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

export function InputFile({
  type,
  name,
  onChange,
}: {
  type: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="input__container">
      <label htmlFor={name}>
        <h2>{name}</h2>
      </label>
      <input
        className="input-image"
        type={type}
        id={name}
        onChange={onChange}
      />
    </div>
  );
}

export function Textarea({
  name,
  text,
  placeholder,
  setValue,
}: {
  name: string;
  text: string;
  placeholder: string;
  setValue: (value: string) => void;
}) {
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <div className="input__container">
      <label htmlFor={name}>
        <h2>{name}</h2>
      </label>
      <textarea
        className="textarea"
        id={name}
        name={name}
        placeholder={placeholder}
        value={text}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
