import { useState } from "react";
import { Image } from "../@types/posts";
import "./Carousel.css";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";

export default function Carousel({
  images,
  title,
}: {
  images: Image[];
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
            key={image.url}
            className="carousel__item"
            style={{ width: `${itemWidth}%` }}
          >
            <img className="carousel__img" src={image.url} alt={title} />
          </figure>
        ))}
      </div>

      <CaretLeftFill
        className={`carousel__btn${index < 1 ? "--disabled" : ""}`}
        onClick={() => handleClick("prev")}
      />

      <CaretRightFill
        className={`carousel__btn${
          index >= images.length - 1 ? "--disabled" : ""
        } carousel__btn-right`}
        onClick={() => handleClick("next")}
      />
    </div>
  );
}
