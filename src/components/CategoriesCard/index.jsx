import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export default function CategoriesCard({ id, title }) {
  const image = `http://localhost:3333/category_img/${id}.jpeg`;

  const link = `/category/${id}`;

  return (
    <Link to={link}>
      <div className={s.categories_card}>
        <img src={image} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  );
}
