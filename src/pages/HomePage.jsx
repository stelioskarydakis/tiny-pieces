import { Link } from "react-router-dom";
import "../styles/homepage-styles.css";
import HomeHeader from "../components/home/HomeHeader";

const HomePage = () => {
  return (
    <>
      <header>
        <HomeHeader />
      </header>
      <main className="home-page">
        <section className="container">
          <div className="flex">
            <Link to="/birthdays">
              Birthdays <span>Render a list from a json file</span>
            </Link>
            <Link to="/tours">
              Tours Birthdays{" "}
              <span>Render a list from a url (Read more/less)</span>
            </Link>
            <Link to="/reviews">
              Reviews <span>Testimonials with prev next buttons</span>
            </Link>
            <Link to="/accordion">
              Accordion <span>Simple accordion (can open all together)</span>
            </Link>
            <Link to="/accordion-active">
              Accordion Active
              <span>Simple accordion (can open only one at a time)</span>
            </Link>
            <Link to="/restaurant">
              Restaurant Menu
              <span>Show the menu with filters</span>
            </Link>
            <Link to="/tabs">
              Tabs
              <span>Show active tab with data from url</span>
            </Link>
            <Link to="/slider">
              Slider
              <span>Two types of slider custom and react-slick</span>
            </Link>
            <Link to="/pallet">
              Pallet
              <span>
                search color take the light and dark shades on clipboard
              </span>
            </Link>
            <Link to="/groceries">
              Groceries
              <span>work with local storage for groceries list</span>
            </Link>
            <Link to="/nav-menu">
              Nav Menu
              <span>
                work with useref to toggle mobile and getBoundingClientRect
              </span>
            </Link>
            <Link to="/modal">
              Simple modal
              <span>Added modal with context use</span>
            </Link>
            <Link to="/sidebar">
              Simple sidebar
              <span>Added sidebar with context use</span>
            </Link>
            <Link to="/cart">
              Cart
              <span>
                Cart functionality with context from external url with actions
                and reducer
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};
export default HomePage;
