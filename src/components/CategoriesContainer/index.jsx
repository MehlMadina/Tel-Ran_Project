import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import CategoriesCard from "../CategoriesCard";
import { asyncLoadCategoriesAction } from "../../store/asyncAction/categories";

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  console.log(categories);

  useEffect(() => {
    dispatch(asyncLoadCategoriesAction);
  }, []);

  return (
    <div className={s.categories_section}>
      <div className={s.categories_header}>
        <h1>Catalog</h1>
        <Link to="/products/all">
          <button>All categories</button>
        </Link>
      </div>

      <div className={s.categories_group}>
        {categories.map((el, index) =>
          index >= 0 && index <= 3 ? <CategoriesCard key={el.id} {...el} /> : ""
        )}
      </div>
    </div>
  );
}
