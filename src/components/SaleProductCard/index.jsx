import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export default function SaleProductCard({
  id,
  title,
  image,
  price,
  discont_price,
}) {
  const product_image = `http://localhost:3333/product_img/${id}.jpeg`;

  const link = `/product/${id}`;

  const sale_percentage = Math.round(((price - discont_price) / price) * 100);

  return (
    <Link to={link}>
      <div className={s.product_item}>
        {discont_price ? (
          <>
            <img src={product_image} alt={title} />
            <div className={s.price_info}>
              <p className={s.discount_price}>{discont_price}$</p>
              <p className={s.price}>{price}$</p>
              <p className={s.sale_percentage}>{sale_percentage}%</p>
            </div>

            <p className={s.title}>{title}</p>
          </>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}
