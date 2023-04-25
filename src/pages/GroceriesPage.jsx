import { useState } from "react";
import Form from "../components/groceries/Form";
import { v4 as uuidv4 } from "uuid";
import Items from "../components/groceries/Items";
import Navbar from "../components/shared/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "../styles/groceries-page-styles.css";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const GroceriesPage = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: uuidv4(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item added to the list");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item deleted");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <main>
      <Navbar />
      <section className="section-center">
        <ToastContainer position="top-center" autoClose={1500} />
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </section>
    </main>
  );
};
export default GroceriesPage;
