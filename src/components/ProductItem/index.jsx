import React from "react";
import { Link } from "react-router-dom";
import s from './style.module.css';
import { useDispatch } from "react-redux";
import { addBasket } from "../../store/reducer/basketReducer";

export default function ProductItem({ id, title, price, discont_price, image }) {
  const product_image = `http://localhost:3333/product_img/${id}.jpeg`;

  const link = `/product/${id}`;

  const sale_percentage = Math.round(((price - discont_price) / price) * 100);

  const dispatch = useDispatch();

  const add_to_basket = () => dispatch(addBasket({ id, title, price, discont_price, image }));


  return (
    <div>
      <button onClick={add_to_basket}>Add to cart</button>
      <div className={s.product_item}>
        <img src={product_image} alt={title} />
        <div className={s.price_info}>
          {discont_price === null ? (
            <p className={s.main_price}>{price}$</p>
          ) : (
            <>
              <p className={s.discount_price}>{discont_price}$</p>
              <p className={s.price}>{price}$</p>
              <p className={s.sale_percentage}>{sale_percentage}%</p>
            </>
          )}
        </div>
        <Link to={link}>
          <p className={s.title}>{title}</p>
        </Link>
      </div>
    </div>
  );
}