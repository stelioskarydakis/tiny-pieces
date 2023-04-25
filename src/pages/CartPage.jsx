import Navbar from "../components/shared/Navbar";
import NavbarCart from "../components/cart/NavbarCart";
import CartContainer from "../components/cart/CartContainer";
import { useCartContext } from "../cartContext";
import "../styles/cart-page-styles.css";

const CartPage = () => {
  const { loading } = useCartContext();
  if (loading) {
    return (
      <main>
        <Navbar />
        <div className="loading" style={{ marginTop: "6rem" }}></div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <div className="flex flex-column">
        <NavbarCart />
        <CartContainer />
      </div>
    </main>
  );
};
export default CartPage;
