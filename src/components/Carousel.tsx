import { useState, useRef, useEffect } from "react";
import "./Carousel.css";

export default function Carousel({ images }: { images: string[] }) {
  const container = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);

  function handleClick(direction: "prev" | "next") {
    console.log(direction);
  }

  useEffect(() => {
    const { current } = container;

    if (!current) {
      return;
    }
  }, []);

  return (
    <div className="carousel non-scroll" ref={container}>
      {images.map((image, idx) => (
        <div className="carousel__items" key={idx}>
          <figure className="carousel__item">
            <img src={image} />
          </figure>
        </div>
      ))}

      <button
        className="carousel__button carousel__button-left"
        aria-label="이전"
        onClick={() => handleClick("prev")}
      />

      <button
        className="carousel__button carousel__button-right"
        aria-label="다음"
        onClick={() => handleClick("next")}
      />
    </div>
  );
}
