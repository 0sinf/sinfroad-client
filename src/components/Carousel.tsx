import "./Carousel.css";

export default function Carousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const containerWidth = 100 * images.length;
  const itemWidth = 100 / images.length;

  return (
    <div className="carousel">
      <div
        className="carousel__container"
        style={{ width: `${containerWidth}%` }}
      >
        {images.map((image) => (
          <figure
            key={image}
            className="carousel__item"
            style={{ width: `${itemWidth}%` }}
          >
            <img className="carousel__img" src={image} alt={title} />
          </figure>
        ))}
      </div>
    </div>
  );
}
