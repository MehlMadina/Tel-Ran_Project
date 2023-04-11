import React from "react";
import s from "./style.module.css";

export default function CategoriesCard({ id, title }) {
  const image = `http://localhost:3333/category_img/${id}.jpeg`;

  return (
    <div className={s.categories_card}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}
