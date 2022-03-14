import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./styles.scss";

export default function InputSearch({ color = true }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={color ? "menu__white" : "menu__gray"}
    >
      <input
        placeholder="Search"
        className={color ? "menu__white" : "menu__gray"}
      />
      <div className={color ? "menu__white" : "menu__gray"}>
        <AiOutlineSearch className="search" />
      </div>
    </form>
  );
}
