import React from "react";
import s from "./style.module.css";
import succulent from "../../media/succulent.jpg";
import { Link } from "react-router-dom";

export default function Banner() {

const link = `/sales/all`;

  return (
    <div className={s.banner_section}>
       <img src={succulent} alt="banner_image" />
      <div className={s.banner_sub_section}>
        <div className={s.info}>
          <p className={s.text_sale}>Perfect Plant</p>
          <p className={s.text_descr}>Sale In Lookbook</p>
          <p className={s.description}>Your online shop for houseplants and more! Here is your one-stop shop for all plant related goodness. It’s a place to learn how to become the best possible plant parent and connect with other plant lovers throughout Europe.
          </p>
          <div>
            <Link to={link}>Sale</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
