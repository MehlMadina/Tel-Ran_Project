import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadProductsAction } from "../../store/asyncAction/allProducts";
import SaleProductCard from "../../components/SaleProductCard";
import s from "./style.module.css";

export default function AllSalesPage() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.all_products);

  useEffect(() => {
    dispatch(asyncLoadProductsAction);
  }, []);

  return (
    <div className={s.products_container}>
      <h2>All sales</h2>
      <div className={s.products}>
        {products.map((el) => (
          <SaleProductCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
