import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export default function CategoriesCard({ id, title, category }) {
  const image = `http://localhost:3333/category_img/${id}.jpeg`;

  const link = `/${category}}`;

  return (
    <Link to={link} className={s.categories_card}>
      <div>
        <img src={image} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  );
}
