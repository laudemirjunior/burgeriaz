import "./styles.scss";
import { AiOutlineSearch } from "react-icons/ai";

export default function InputSearch({ color = true }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={
        color ? "from__container menu__white" : "from__container menu__gray"
      }
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
