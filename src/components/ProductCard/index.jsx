import React from "react";

export default function ProductCard({ id, title, image, category }) {
  const product_item_img = `http://localhost:3333${image}`;

  return (
    <div>
      <img src={product_item_img} alt={title} />
      <p>{title}</p>

      <button>Add to cart</button>
    </div>
  );
}
