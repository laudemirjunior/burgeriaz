import React from "react";
import "./styles.scss";

export default function Link({ children, rota = "/" }) {
  return (
    <a className="link" href={rota}>
      {children}
    </a>
  );
}
