import { useState, MouseEvent } from "react";
import "./Carousel.css";

interface CustomEventTarget extends EventTarget {
  name: string;
}

export function Carousel({ images }: { images: string[] }) {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    const target = event.target as CustomEventTarget;
    if (target.name === "prev") {
      setIndex(index > 0 ? index - 1 : images.length - 1);
      return;
    }
    setIndex(index < images.length - 1 ? index + 1 : 0);
  }
  const components = images.map((image, idx) => (
    <article className="carousel-item" key={idx}>
      <figure className="carousel-item__image">
        <img src={image} />
      </figure>
    </article>
  ));

  const [index, setIndex] = useState(0);

  return (
    <div className="carousel">
      <button
        className="carousel_button"
        name="prev"
        onClick={handleClick}
      ></button>
      {components[index]}
      <button
        className="carousel_button"
        name="next"
        onClick={handleClick}
      ></button>
    </div>
  );
}
