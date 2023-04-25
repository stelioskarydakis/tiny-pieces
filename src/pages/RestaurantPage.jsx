import { useState } from "react";
import Menu from "../components/restaurant/Menu";
import Categories from "../components/restaurant/Categories";
import Title from "../components/shared/Title";
import items from "../components/restaurant/data";
import Navbar from "../components/shared/Navbar";
import "../styles/restaurant-page-styles.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const RestaurantPage = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <Navbar />
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default RestaurantPage;
