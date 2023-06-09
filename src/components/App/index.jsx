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
import ProductPage from "../../pages/ProductPage";
import AccountPage from "../../pages/AccountPage";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="products/all" element={<AllProductsPage />} />
          <Route path="sales/all" element={<AllSalesPage />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="category" element={<AllCategoriesPage />} />
          <Route path="category/:id" element={<ProductsPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="account/*" element={<AccountPage />}/> 
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
