import Modal from "../components/modal/Modal";
import Navbar from "../components/shared/Navbar";
import { useGlobalContext } from "../globalContext";
import "../styles/modal-page-styles.css";

const ModalPage = () => {
  const { openModal } = useGlobalContext();

  return (
    <>
      <main>
        <Navbar />
        <button onClick={openModal} className="btn">
          show modal
        </button>
        <Modal />
      </main>
    </>
  );
};
export default ModalPage;
