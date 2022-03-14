import "./styles.scss";
import InputSearch from "../inputSearch";

export default function MenuHamburguer() {
  return (
    <div className="menu__humburguer">
      <a className="link" href="/">
        New Menu
      </a>
      <a className="link" href="/">
        About Us
      </a>
      <a className="link" href="/">
        Main Course
      </a>
      <InputSearch />
    </div>
  );
}
