import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export default function ProductCard({ id, title, image, price }) {
  const src_img = `http://localhost:3333${image}`;
  const link = `/product/${id}`;

  return (
    <Link to={link}>
      <div className={s.product_item}>
        <img src={src_img} alt={title} />
        <p>{price}$</p>
        <p>{title}</p>
      </div>
    </Link>
  );
}
