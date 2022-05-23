import { useState, useRef, useEffect } from "react";
import "./Carousel.css";

export default function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const container = useRef<HTMLDivElement>(null);

  function handleClick(direction: "prev" | "next") {
    if (direction === "next") {
      return setIndex((x) => (x < images.length - 1 ? x + 1 : 0));
    }
    return setIndex((x) => (x > 0 ? x - 1 : images.length - 1));
  }

  const handleResize = () => {
    const { current } = container;

    if (!current) {
      return;
    }

    setContainerWidth(current.offsetWidth);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="carousel" ref={container}>
      <div
        className="carousel__slider"
        style={{
          transform: `translate3d(${index * -containerWidth}px, 0, 0)`,
        }}
      >
        {images.map((image, idx) => (
          <div className="carousel__items" key={idx}>
            <figure className="carousel__item">
              <img src={image} />
            </figure>
          </div>
        ))}
      </div>
      <button
        className="carousel__button carousel__button-left"
        aria-label="이전"
        disabled={index === 0}
        onClick={() => handleClick("prev")}
      />

      <button
        className="carousel__button carousel__button-right"
        aria-label="다음"
        disabled={index === images.length - 1}
        onClick={() => handleClick("next")}
      />
    </div>
  );
}
