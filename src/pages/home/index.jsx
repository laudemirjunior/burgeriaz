import React from "react";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Header from "../../components/header/index";
import Slider from "../../components/slider";
import "./styles.scss";

export default function Home() {
  return (
    <main>
      <Header />
      <article>
        <Banner />
        <Slider />
      </article>
      <Footer />
      <div className="home__circle home__top" />
      <div className="home__circle home__bottom" />
      <div className="home__circle home__left" />
      <h1 className="home__text">FOOD</h1>
    </main>
  );
}
