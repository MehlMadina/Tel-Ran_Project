import React from "react";
import { NavLink, Link } from "react-router-dom";
import s from "./style.module.css";
import logo from "../../media/logo.png";
import shopping_bag from "../../media/shopping_bag.png";

export default function NavMenu() {

const links = [
  { id: 1, label: "Main Page", to: "/" },
  { id: 2, label: "All products", to: "/products/all" },
  { id: 3, label: "All sales", to: "/sales/all" },
];

const checkClass = ({ isActive }) => isActive ? s.active : '';

  return (
    <div className={s.nav_wrapper}>
      <div className={s.logo_block}>
        <img src={logo} alt="logo" />
        <Link to='/category'> Catalog </Link>
      </div>

      <nav className={s.nav_menu}>
        {links.map(({ id, label, to }) => (
          <NavLink key={id} to={to} className={checkClass}>
            {label}
          </NavLink>
        ))}
        <NavLink to="/basket">
          <img src={shopping_bag} alt="basket" />
        </NavLink>
      </nav>
    </div>
  );
}
