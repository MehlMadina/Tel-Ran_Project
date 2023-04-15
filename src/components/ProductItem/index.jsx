import React from "react";
import { Link } from "react-router-dom";
import s from './style.module.css';

export default function ProductItem({ id, title, image, price }) {
  
  const product_image = `http://localhost:3333/product_img/${id}.jpeg`;
  
  return (
    <div className={s.product_item}>
      <Link>
        <img src={product_image} alt={title} />
        <p>{price}$</p>
        <p>{title}</p>
      </Link>
    </div>
  );
}