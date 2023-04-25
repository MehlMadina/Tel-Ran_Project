import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadProductsAction } from "../../store/asyncAction/allProducts";
import s from "./style.module.css";
import ProductCard from "../../components/ProductCard";

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
        {products
        .filter(({ discont_price }) => discont_price !== null)
        .map((el) => (
          <ProductCard key={el.id} {...el}/>
        ))}
      </div>
    </div>
  );
}
