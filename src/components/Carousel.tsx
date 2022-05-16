import { useState, useRef, useEffect } from "react";
import "./Carousel.css";

export default function Carousel({ images }: { images: string[] }) {
  const container = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const { current } = container;

    if (!current) {
      return;
    }

    current.style.width =
      window.innerWidth > 1100 ? `${images.length}00%` : "100%";
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
    </div>
  );
}
