import React from "react";
import "./styles.scss";

export default function Banner() {
  return (
    <div className="banner__container">
      <h2>OPEN TODAY FOR GREAT FOOD</h2>
      <div className="phase">
        <h1>You Can Make</h1>
        <h1>
          Your Own <span>Burger</span>
        </h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
      <button>GET START</button>
    </div>
  );
}
