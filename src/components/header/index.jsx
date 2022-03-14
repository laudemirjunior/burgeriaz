import { CgMenuRightAlt } from "react-icons/cg";
import "./styles.scss";
import Logo from "../../assets/logo.svg";
import MenuHamburguer from "../menuHamburguer";
import Link from "../link";
import InputSearch from "../inputSearch";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <header>
      <nav>
        <div className="header__logo">
          <img src={Logo} alt="logo" />
          <a href="/">
            BURGER<span>IAZ</span>
          </a>
        </div>
        <div className="header__menu">
          <Link children={"New Menu"} />
          <Link children={"About Us"} />
          <Link children={"Main Course"} />
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
