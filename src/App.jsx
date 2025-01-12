import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext/CartContext";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import DiscountsPage from "./pages/DiscountsPage/DiscountsPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CartPage from "./pages/CartPage/CartPage";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Loading />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/sales" element={<DiscountsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
