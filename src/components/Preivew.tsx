import { XCircleFill } from "react-bootstrap-icons";
import "./Preview.css";

export default function Preview({ images }: { images: File[] }) {
  return (
    <div className="preview">
      {images.map((image) => (
        <figure className="preview__container" key={image.name}>
          <img
            className="preview__image"
            src={URL.createObjectURL(image)}
            alt={image.name}
          />
          <XCircleFill className="preview__button" />
        </figure>
      ))}
      {/* TODO: Add remove button, and handleClick  */}
    </div>
  );
}
