import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { load_products } from "../../store/asyncAction/products";
import ProductCard from "../../components/ProductCard";
import s from "./style.module.css";
import { asyncLoadCategoriesAction } from "../../store/asyncAction/categories";
import FilterSearchForm from "../../components/FilterSortForm";

export default function ProductsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  let category_title = categories.length >= 1 ? categories[id - 1].title : "";

  useEffect(() => {
    dispatch(load_products(id));
    dispatch(asyncLoadCategoriesAction);
  }, []);

  return (
    <div>
      <div className={s.products_page}>
        {products.length === 0 ? (
          <p>Products are loading...</p>
        ) : (
          <div>
            <h1>{category_title}</h1>
            <FilterSearchForm />
            <div className={s.products}>
              {products
                .filter((el) => !el.hide_mark)
                .map((el) => (
                  <ProductCard key={el.id} {...el} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
