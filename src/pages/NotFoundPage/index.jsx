import React from "react";
import s from "./style.module.css";
import page_not_found from "../../media/error.avif";
import { Link } from "react-router-dom";


export default function NotFoundPage() {
  return (
      <div className={s.container}>
        <img src={page_not_found} alt="not_found_page_img" />
        <div className={s.info}>
          <p className={s.title}>Page not found</p>
          <p className={s.text}>
            Unfortunately the page you are looking for could not be found. It
            may be temporarily unavailable, moved or no longer exist.
          </p>
          <Link to="/">go to mainpage</Link>
        </div>
      </div>
  );
}
