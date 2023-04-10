import React from "react";
import s from "./style.module.css";
import banner from "../../media/banner.png";

export default function Banner() {
  return (
    <div className={s.banner_section}>
      <div className={s.banner_sub_section}>
        <div className={s.info}>
          <p className={s.text_sale}>Sale</p>
          <p className={s.text_descr}>New season</p>
          <div>
            <button>Sale</button>
          </div>
        </div>
        <img src={banner} alt="banner_img" />
      </div>
    </div>
  );
}
