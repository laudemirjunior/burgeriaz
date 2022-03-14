import "./styles.scss";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Slider from "../../components/slider";

export default function Home() {
  return (
    <main className="home__container">
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
