import "./Carousel.css";
import { ButtonHTMLAttributes, useState } from "react";

export default function Carousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const containerWidth = 100 * images.length;
  const itemWidth = 100 / images.length;

  const [index, setIndex] = useState(0);
  const [leftMargin, setLeftMargin] = useState(0);

  const handleClick = (direction: "prev" | "next") => {
    if (direction === "prev" && index <= 0) {
      return;
    }

    if (direction === "next" && images.length - 1 <= index) {
      return;
    }

    if (direction === "next") {
      setIndex((x) => x + 1);
      setLeftMargin((x) => x - 100);
      return;
    }

    setIndex((x) => x - 1);
    setLeftMargin((x) => x + 100);
  };

  return (
    <div className="carousel">
      <div
        className="carousel__container"
        style={{ width: `${containerWidth}%`, marginLeft: `${leftMargin}%` }}
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
      {/* FIXME: Fix button to icon */}
      <button
        className="carousel__btn carousel__btn-left"
        onClick={() => handleClick("prev")}
        disabled={index <= 0}
      ></button>
      <button
        className="carousel__btn carousel__btn-right"
        onClick={() => handleClick("next")}
        disabled={images.length - 1 <= index}
      ></button>
    </div>
  );
}
