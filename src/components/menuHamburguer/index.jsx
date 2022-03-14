import "./styles.scss";
import InputSearch from "../inputSearch";

export default function MenuHamburguer() {
  const url = window.location.pathname;

  return (
    <div className="menu__humburguer">
      <a
        className="link"
        href="/"
        style={url === "/" && { fontWeight: "500", color: "black" }}
      >
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
