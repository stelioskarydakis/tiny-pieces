import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  BirthdaysPage,
  ToursPage,
  ReviewsPage,
  AccordionPage,
  AccordionActivePage,
  RestaurantPage,
  TabsPage,
  SliderPage,
  PalletPage,
  GroceriesPage,
  NavMenuPage,
  ModalPage,
  SidebarPage,
  CartPage,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} index />
        <Route element={<BirthdaysPage />} path="/birthdays" />
        <Route element={<ToursPage />} path="/tours" />
        <Route element={<ReviewsPage />} path="/reviews" />
        <Route element={<AccordionPage />} path="/accordion" />
        <Route element={<AccordionActivePage />} path="/accordion-active" />
        <Route element={<RestaurantPage />} path="/restaurant" />
        <Route element={<TabsPage />} path="/tabs" />
        <Route element={<SliderPage />} path="/slider" />
        <Route element={<PalletPage />} path="/pallet" />
        <Route element={<GroceriesPage />} path="/groceries" />
        <Route element={<NavMenuPage />} path="/nav-menu" />
        <Route element={<ModalPage />} path="/modal" />
        <Route element={<SidebarPage />} path="/sidebar" />
        <Route element={<CartPage />} path="/cart" />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
