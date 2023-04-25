import Navbar from "../components/shared/Navbar";
import Carousel from "../components/slider/Carousel";
import SlickCarousel from "../components/slider/SlickCarousel";
import Title from "../components/shared/Title";
import "../styles/slider-page-styles.css";

const SliderPage = () => {
  return (
    <main>
      <Navbar />
      <div className="flex flex-column">
        <div className="flexcol">
          <Title text="custom carousel" />
          <Carousel />
        </div>
        <div className="flexcol">
          <Title text="slick carousel" />
          <SlickCarousel />
        </div>
      </div>
    </main>
  );
};
export default SliderPage;
