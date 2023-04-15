import React from "react";
import gnome from "../../media/gnome.png";
import s from './style.module.css';

export default function DiscountForm() {
  return (
    <div className={s.discount_form_section}>
      <div>
        <img src={gnome} alt="Gnome" />
      </div>
      <div className={s.discount_form}>
        <h1>5% off</h1>
        <p>on the first order</p>
        <form>
          <input type="tel" name="phone" placeholder="+49" />
          <button>Get a discount</button>
        </form>
      </div>
    </div>
  );
}
