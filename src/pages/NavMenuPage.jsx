import NavigationBar from "../components/nav-menu/NavigationBar";
import Navbar from "../components/shared/Navbar";
import "../styles/nav-menu-page-styles.css";

const NavMenuPage = () => {
  return (
    <main>
      <div className="w-100">
        <Navbar />
        <NavigationBar />
      </div>
    </main>
  );
};
export default NavMenuPage;
