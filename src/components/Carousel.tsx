import { useCallback, useMemo, useState } from "react";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";
import { Image } from "../@types/posts";
import "./Carousel.css";

export default function Carousel({
  images,
  title,
}: {
  images: Image[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const max = useMemo(() => images.length - 1, [images.length]);
  const leftButtonDisabled = useMemo(() => index <= 0, [index]);
  const rightButtonDisabled = useMemo(() => max <= index, [max, index]);

  const handleClick = useCallback(
    (direction: "prev" | "next") => {
      setIndex((currentIndex) => {
        const directionInNumber = direction === "prev" ? -1 : 1;
        const nextIndex = currentIndex + directionInNumber;

        if (nextIndex < 0 || max < nextIndex) {
          return currentIndex;
        }

        return nextIndex;
      });
    },
    [max]
  );

  return (
    <div className="carousel">
      <div
        className="carousel__container"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map(({ url }) => (
          <figure key={url} className="carousel__item">
            <img className="carousel__img" src={url} alt={title} />
          </figure>
        ))}
      </div>

      <button
        type="button"
        className="carousel__btn"
        disabled={leftButtonDisabled}
        onClick={() => handleClick("prev")}
      >
        <CaretLeftFill />
      </button>

      <button
        type="button"
        className="carousel__btn carousel__btn--right"
        disabled={rightButtonDisabled}
        onClick={() => handleClick("next")}
      >
        <CaretRightFill />
      </button>
    </div>
  );
}
