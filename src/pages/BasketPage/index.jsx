import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../../components/BasketItem";
import s from "./style.module.css";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { clearBasket } from "../../store/reducer/basketReducer";
import { useForm } from "react-hook-form";
import { order_products } from "../../store/asyncAction/products";

export default function BasketPage() {

  const dispatch = useDispatch();
  const { basket, all_products } = useSelector((state) => state);

  let data = basket.map((item) => {
    const product = all_products.find(({id}) => id === item.id);
    return {...product, ...item}
  });

  const totalPrice = data.reduce((acc, { price, discont_price, count }) => 
  discont_price !== null
  ? acc + discont_price * count
  : acc + price * count, 0).toFixed(2);


  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: "onBlur"
  });
  
  const submit = data => {
    dispatch(order_products({data}));
    reset();
  };
  
  const numberRegex = /^\+49\d{11}$/;
  
  const phoneRegister = register('phone', {
    required: '* The field "Phone number" is required',
    pattern: {
        value: numberRegex,
        message: '* Not valid number format'
    }
  });

  return (
    <div className={s.basket_page}>
      <div className={s.basket_container}>
        <h2>Shopping cart</h2>
        <div className={s.link}>
          <Link to="/products/all">
            Back to the store <RightOutlined />
          </Link>
        </div>
        {basket.length === 0 ? (
          <div>The cart is empty</div>
        ) : (
          <div>
            {basket.map((el) => (
              <BasketItem key={el.id} {...el} />
            ))}
          </div>
        )}
      </div>

      <div className={s.basket_block}>
        <h2>Order details</h2>
        <div className={s.sum_block}>
          <p className={s.sum}>Total</p>
          <p className={s.total_price}>{totalPrice}$</p>
        </div>
        <div className={s.btn_block}>
          <form onSubmit={handleSubmit(submit)}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              {...phoneRegister}
            />

            <div className={s.error}>
              {errors.phone && <p>{errors.phone?.message}</p>}
            </div>

            <div className={s.btns}>
              <button>Order</button>
              <button onClick={() => dispatch(clearBasket())}>
                Clear the cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
