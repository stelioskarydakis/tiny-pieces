import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="back-btn">
        <Link to="/">
          <AiOutlineArrowLeft />
          <span>Go Back Home</span>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
