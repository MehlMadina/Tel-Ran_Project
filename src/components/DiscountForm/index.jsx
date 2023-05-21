import React from "react";
import s from './style.module.css';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { order_sale } from "../../store/asyncAction/sale";

export default function DiscountForm() {

const dispatch = useDispatch();

const { register, handleSubmit, formState: { errors }, reset } = useForm({
  mode: "onBlur"
});

const submit = data => {
  dispatch(order_sale({data}));
  reset();
};

const numberRegex = /^\+49\d{11}$/;

const phoneRegister = register('phone', {
  required: '* The field "phone" is required',
  pattern: {
      value: numberRegex,
      message: '* Not valid number format'
  }
});

  return (
    <div className={s.discount_form_section}>
      <div className={s.discount_form}>
        <h1>5% off</h1>
        <p>on the first order</p>
        <form onSubmit={handleSubmit(submit)}>
          <input type="tel" name="phone" placeholder="+49" {...phoneRegister} />
          <button>Get a discount</button>
        </form>
      </div>
      <div className={s.error}>
        {errors.phone && <p>{errors.phone?.message}</p>}
      </div>
    </div>
  );
}
