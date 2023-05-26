import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncLoadProductAction } from "../../store/asyncAction/product";
import { addBasket } from "../../store/reducer/basketReducer";
import s from "./style.module.css";


export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(asyncLoadProductAction(id));
  }, []);


  const { title, description, price, image, discont_price } = product;
  const add_to_basket = () => dispatch(addBasket({ id, title, price, discont_price, image }));
  const img = `http://localhost:3333${image}`;
  const discount_percent = (price - discont_price) / price * 100;

  return (
    <div>
      {product.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={s.card}>
            <div className={s.left_block}>
              <img src={img} alt={title} />
            </div>
            <div className={s.right_block}>
              <p className={s.title}>{title}</p>
              <div className={s.price_block}>
                <p className={s.price}>
                  {discont_price === null ? price + "$" : discont_price + "$"}
                </p>
                <p className={s.old_price}>
                  {discont_price === null ? "" : price + "$"}
                </p>
                <p className={s.percent_discount}>
                  {discont_price === null
                    ? ""
                    : `-${discount_percent.toFixed(0)}%`}
                </p>
              </div>
              <div className={s.description_block}>
                <p className={s.description_title}>Description</p>
                <p className={s.text}>{description}</p>
                <button onClick={add_to_basket}>To cart</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
