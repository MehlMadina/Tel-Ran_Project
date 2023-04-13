import React from "react";
import { Link } from "react-router-dom";

export default function ProductsItem({ id, title, image, price }) {
  
  const product_image = `http://localhost:3333/product_img/${id}.jpeg`;
  
  return (
    <div>
      <Link>
        <img src={product_image} alt={title} />
        <p>{price}</p>
        <p>{title}</p>
      </Link>
    </div>
  );
}
