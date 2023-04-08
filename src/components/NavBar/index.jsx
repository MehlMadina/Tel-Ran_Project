import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import logo from "../../media/logo.png";
import shopping_bag from "../../media/shopping_bag.png";

export default function Navbar() {
  return (
    <nav className={s.nav_bar}>
      <div className={s.logo_block}>
        <Link to="/">
          <img src={logo} alt="logo" className={s.logo} />
        </Link>
        <Link to="/categories_page" className={s.categories}>
          <button>Catalog</button>
        </Link>
      </div>

      <li className={s.nav_block}>
        <Link to="/main_page" className={s.main_page}>
          <ul>Main Page</ul>
        </Link>
        <ul>All Products</ul>
        <ul>All sales</ul>
        <ul>
          <img src={shopping_bag} alt="shopping_bag" />
        </ul>
      </li>
    </nav>
  );
}
