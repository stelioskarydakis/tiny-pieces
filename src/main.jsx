import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "./globalContext";
import { AppCartProvider } from "./cartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <AppCartProvider>
      <App />
    </AppCartProvider>
  </AppProvider>
);
