import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadProductsAction } from "../../store/asyncAction/allProducts";
import s from "./style.module.css";
import ProductCard from "../../components/ProductCard";
import FilterSearchForm from "../../components/FilterSortForm";


export default function AllProductsPage() {
  const dispatch = useDispatch();

  const all_products = useSelector((state) => state.all_products);

  useEffect(() => {
    dispatch(asyncLoadProductsAction);
  }, []);

  return (
    <div className={s.container}>
      <div className={s.products_container}>
        <h2>All products</h2>
        <FilterSearchForm />
        <div className={s.products}>
          {all_products
            .filter(({ show }) => Object.values(show).every(el => el))
            .filter(({ show_sale }) => show_sale)
            .map((el) => (
            <ProductCard key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
}
