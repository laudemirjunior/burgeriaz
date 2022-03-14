import React from "react";
import "./styles.scss";
import Link from "../link";
import InputSearch from "../inputSearch";

export default function MenuHamburguer() {
  return (
    <div className="menu__humburguer">
      <Link children={"New Menu"} />
      <Link children={"About Us"} />
      <Link children={"Main Course"} />
      <InputSearch />
    </div>
  );
}
