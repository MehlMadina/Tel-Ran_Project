import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBasket } from "../../store/reducer/basketReducer";

export default function ProductCard({
  id,
  title,
  image,
  price,
  discont_price

}) {
  const src_img = `http://localhost:3333${image}`;

  const link = `/product/${id}`;

  const sale_percentage = Math.round(((price - discont_price) / price) * 100);

  const dispatch = useDispatch();

  const add_to_basket = () => dispatch(addBasket({ id, title, price, discont_price, image }));

  return (
    <div className={s.product_item}>
      <button onClick={add_to_basket}>Add to cart</button>
      <img src={src_img} alt={title} />
      <div className={s.price_info}>
        {discont_price === null ? (
          <p className={s.main_price}>{price}$</p>
        ) : (
          <>
            <Link to={link}>
              <p className={s.discount_price}>{discont_price}$</p>
              <p className={s.price}>{price}$</p>
              <p className={s.sale_percentage}>{sale_percentage}%</p>
            </Link>
          </>
        )}
      </div>
      <p className={s.title}>{title}</p>
    </div>
  );
}
