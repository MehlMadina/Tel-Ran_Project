import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import "./index.css";
import MainPage from "../../pages/MainPage";
import AllProductsPage from "../../pages/AllProductsPage";
import AllSalesPage from "../../pages/AllSalesPage";
import BasketPage from "../../pages/BasketPage";
import NotFoundPage from "../../pages/NotFoundPage";
import AllCategoriesPage from "../../pages/AllCategoriesPage";
import ProductsPage from "../../pages/ProductsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="products/all" element={<AllProductsPage />} />
          <Route path="sales" element={<AllSalesPage />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="category" element={<AllCategoriesPage />} />
          <Route path="category/:id" element={<ProductsPage />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
