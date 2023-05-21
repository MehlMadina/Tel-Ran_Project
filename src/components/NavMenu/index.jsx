import React, { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import s from "./style.module.css";
import logo from "../../media/logo.png";
import shopping_bag from "../../media/shopping_bag.png";
import { useSelector } from "react-redux";
import { MenuOutlined } from '@ant-design/icons'

export default function NavMenu() {

const links = [
  { id: 1, label: "Main Page", to: "/" },
  { id: 2, label: "All products", to: "/products/all" },
  { id: 3, label: "All sales", to: "/sales/all" },
];

const checkClass = ({ isActive }) => isActive ? s.active : '';

const basket = useSelector(({ basket }) => basket);
const totalItems = basket.reduce((acc, { count }) => acc + count, 0);

const nav_links = useRef();

const navBtnOnClick = () => {
  const links = nav_links.current;
  links.classList.toggle(s.links_show)
}

  return (
    <div className={s.nav_wrapper}>
      <div className={s.logo_block}>
        <img src={logo} alt="logo" />
        <Link to="/category"> Catalog </Link>
      </div>

      <div className={s.all_links} ref={nav_links}>
        <nav className={s.nav_menu}>
          <div className={s.links}>
            {links.map(({ id, label, to }) => (
              <NavLink key={id} to={to} className={checkClass}>
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
        <div>
          <NavLink to="/basket">
            <img src={shopping_bag} alt="basket" />
            {totalItems === 0 ? "" : totalItems}
          </NavLink>
        </div>
      </div>
      <MenuOutlined className={s.nav_btn} onClick={navBtnOnClick} />
    </div>
  );
}
