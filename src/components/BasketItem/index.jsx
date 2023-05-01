import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { decrementCount, deleteProduct, incrementCount } from "../../store/reducer/basketReducer";
import { Link } from "react-router-dom";
import { CloseOutlined } from '@ant-design/icons';

export default function BasketItem({
  id,
  title,
  price,
  discont_price,
  image,
  count,
}) {
  const src_img = `http://localhost:3333${image}`;
  const link = `/product/${id}`;

  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <Link to={link}>
        <img src={src_img} alt={title} />
      </Link>
      <div className={s.count_block}>
        <p>{title}</p>
        <div className={s.triggers}>
          <button onClick={() => dispatch(decrementCount(id))}>-</button>
          <p>{count}</p>
          <button onClick={() => dispatch(incrementCount(id))}>+</button>
        </div>
      </div>
      {discont_price != null ? (
        <>
          <p className={s.price}>{(discont_price * count).toFixed(2)}$</p>
          <p className={s.oldPrice}>{(price * count).toFixed(2)}$</p>
        </>
      ) : (
        <p className={s.price}>{(price * count).toFixed(2)}$</p>
      )}

      <button className={s.del_btn} onClick={() => dispatch(deleteProduct(id))}>
        <CloseOutlined />
      </button>
    </div>
  );
}
