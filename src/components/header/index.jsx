import "./styles.scss";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import Logo from "../../assets/logo.svg";
import MenuHamburguer from "../menuHamburguer";
import InputSearch from "../inputSearch";

export default function Header() {
  const [show, setShow] = useState(false);

  const url = window.location.pathname;

  return (
    <header>
      <nav>
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
          <a href="/">
            BURGER<span>IAZ</span>
          </a>
        </div>
        <div className="header__menu">
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
          <InputSearch color={false} />
          <CgMenuRightAlt
            className="header__bar"
            onClick={() => setShow(!show)}
          />
        </div>
      </nav>
      {show && <MenuHamburguer />}
    </header>
  );
}
