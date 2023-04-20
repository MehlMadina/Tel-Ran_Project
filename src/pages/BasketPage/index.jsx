import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../../components/BasketItem";
import s from "./style.module.css";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { clearBasket } from "../../store/reducer/basketReducer";

export default function BasketPage() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  return (
    <div>
      <div className={s.basket_container}>
        <h2>Shopping cart</h2>
        <div>
          <Link to="/">
            Back to the store <RightOutlined className={s.arrow} />
          </Link>
        </div>
        {basket.length === 0 ? (
          <div>The cart is empty</div>
        ) : (
          <div>
            {basket.map((el) => (
              <BasketItem key={el.id} {...el} ID={el.id} />
            ))}
          </div>
        )}
      </div>

      <div className={s.basket_block}>
        <h2>Order Details</h2>
        <div className={s.sum_block}>
          <p className={s.sum}>Total:</p>
          <p className={s.count}>
            {basket.reduce((prev, { price, count }) => prev + price * count, 0)}
            $
          </p>
        </div>
        <div className={s.btn_block}>
          <input type="tel" name="phone" placeholder="Your phone number" />
          <button>To Order</button>
          <button onClick={() => dispatch(clearBasket())}>
            Clear the cart
          </button>
        </div>
      </div>
    </div>
  );
}
