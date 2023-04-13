import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import CategoriesCard from "../../components/CategoriesCard";
import { asyncLoadCategoriesAction } from "../../store/asyncAction/categories";

export default function AllCategoriesPage() {

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(asyncLoadCategoriesAction);
  }, []);


  return (
    <div className={s.categories_section}>
      <h1>Categories</h1>
      <div className={s.categories_group}>
        {categories.map((el) => (
          <CategoriesCard key={el.id} {...el} category={el.id}/>
        ))}
      </div>
    </div>
  );
}
