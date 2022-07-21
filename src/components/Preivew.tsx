import "./Preview.css";

export default function Preview({ images }: { images: File[] }) {
  return (
    <div className="preview">
      {images.map((image) => (
        <img
          className="preview__image"
          key={image.name}
          src={URL.createObjectURL(image)}
          alt={image.name}
        />
      ))}
    </div>
  );
}
