import { ChangeEvent } from "react";
import "./Input.css";
import { InputProps, TextAreaProps } from "../@types/Input";

export function Input({
  type,
  name,
  value,
  placeholder,
  className,
  setValue,
  handleUpload,
  disabled = true,
  withLabel = true,
}: InputProps) {
  const isUploading = type === "file";

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!setValue) {
      return;
    }

    const value = event.target.value;
    setValue(value);
  };

  return (
    <div className="input__container">
      {withLabel ? (
        <label htmlFor={name}>
          <h2>{name}</h2>
        </label>
      ) : (
        ""
      )}
      {isUploading ? (
        <input
          className={className}
          type={type}
          id={name}
          onChange={handleUpload}
        />
      ) : (
        <input
          className={className}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled
        />
      )}
    </div>
  );
}

export function Textarea({
  name,
  value,
  placeholder,
  setValue,
}: TextAreaProps) {
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
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
