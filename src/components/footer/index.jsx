import React from "react";
import { ImFacebook } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import "./styles.scss";

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="footer_about">
        <h1>
          <div />
          About Us
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. mpor
          incididunt utmpor
        </p>
      </div>
      <div className="footer_social">
        <div className="footer__sociais">
          <p>Don’t Miss Our Promo On</p>
          <div className="footer__svg">
            <ImFacebook />
          </div>
          <div className="footer__svg">
            <FiInstagram />
          </div>
          <div className="footer__svg">
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}
