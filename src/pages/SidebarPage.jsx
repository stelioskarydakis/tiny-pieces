import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { useGlobalContext } from "../globalContext";
import "../styles/sidebar-page-style.css";

import { FaBars } from "react-icons/fa";

const SidebarPage = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <>
      <main>
        <Navbar />
        <button onClick={openSidebar} className="sidebar-toggle">
          <FaBars />
        </button>
        <Sidebar />
      </main>
    </>
  );
};
export default SidebarPage;
