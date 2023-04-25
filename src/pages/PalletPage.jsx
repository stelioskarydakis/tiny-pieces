import ColorList from "../components/pallet/ColorList";
import Form from "../components/pallet/Form";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../styles/pallet-page-styles.css";
import Navbar from "../components/shared/Navbar";

const PalletPage = () => {
  const [colors, setColors] = useState(new Values("#db398f").all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Navbar />
      <div className="flex flex-column w-100">
        <Form addColor={addColor} />
        <ColorList colors={colors} />
      </div>
      <ToastContainer position="top-center" autoClose={1500} />
    </main>
  );
};
export default PalletPage;
