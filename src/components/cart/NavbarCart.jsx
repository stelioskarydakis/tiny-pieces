import { FaCartPlus } from "react-icons/fa";
import { useCartContext } from "../../cartContext";
const NavbarCart = () => {
  const { totalAmount } = useCartContext();
  return (
    <div className="nav">
      <div className="nav-center">
        <h4>Cart</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarCart;
