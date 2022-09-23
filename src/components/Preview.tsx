import { XCircleFill } from "react-bootstrap-icons";
import "./Preview.css";

export default function Preview({
  images,
  handleRemoveImage,
}: {
  images: File[];
  handleRemoveImage: (i: File, url: string) => void;
}) {
  return (
    // TODO: heic file preview
    <div className="preview">
      {images.map((image) => {
        const url = URL.createObjectURL(image);

        return (
          <figure className="preview__container" key={image.name}>
            <img className="preview__image" src={url} alt={image.name} />
            <XCircleFill
              className="preview__button"
              onClick={() => handleRemoveImage(image, url)}
            />
          </figure>
        );
      })}
    </div>
  );
}
