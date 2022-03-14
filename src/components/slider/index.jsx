import { useEffect, useState } from "react";
import { GiPauseButton, GiPlayButton } from "react-icons/gi";
import "./styles.scss";
import hamburgueres from "./list.js";

export default function Slider() {
  const [number, setNumber] = useState(0);
  const [pause, setPause] = useState(true);

  useEffect(() => {
    if (pause === true) {
      const interval = setInterval(() => {
        if (number + 1 !== hamburgueres.length) {
          setNumber((number) => number + 1);
        } else {
          setNumber(0);
        }
      }, 5000);
      return () => clearInterval(interval);
    } else {
      clearInterval();
    }
  }, [number, pause]);

  const next = (event) => {
    const coords = (event) => event.clientX;
    let width = document.querySelector(".slider__image").clientWidth;
    if (coords(event) - width > width / 2) {
      if (number + 1 !== hamburgueres.length) {
        return setNumber(number + 1);
      }
      return setNumber(0);
    } else {
      if (number - 1 !== -1) {
        return setNumber(number - 1);
      }
      return setNumber(hamburgueres.length - 1);
    }
  };

  return (
    <div className="slider__container">
      <div className="slider__main">
        <div className="slider__text">
          <h1>BUR</h1>
          <h1>GER</h1>
        </div>
        <div className="image">
          <img
            src={hamburgueres[number].image}
            alt=""
            className="slider__image"
            onClick={(event) => next(event)}
          />
        </div>
        <div className="slider__h2">
          <h2>
            Spicy Beef <span>Burger</span>
          </h2>
        </div>
        <div className="slider__controls">
          <div onClick={() => setPause(!pause)} className="slider__pause">
            {pause ? <GiPauseButton /> : <GiPlayButton />}
          </div>
          <div className="slider__dots">
            {hamburgueres.map((_, index) => (
              <div
                key={index}
                onClick={() => setNumber(index)}
                className={
                  number === index ? "slider__dot slider__scale" : "slider__dot"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}