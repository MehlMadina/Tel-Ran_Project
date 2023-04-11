import React from "react";
import s from "./style.module.css";
import page_not_found from "../../media/page_404.jpg";

export default function NotFoundPage() {
  return( 
    <div>
      <header className={s.header}>
        <img src={page_not_found} alt="not_found_page_img" />
      </header>
    </div>
  );
}
