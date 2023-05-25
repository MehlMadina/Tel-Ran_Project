import React, { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import s from "./style.module.css";
import logo from "../../media/logo.png";
import shopping_bag from "../../media/shopping_bag.png";
import { useSelector } from "react-redux";
import { MenuOutlined } from "@ant-design/icons";
import user from "../../media/user.png";

export default function NavMenu() {
  // const links = [
  //   { id: 1, label: "Main Page", to: "/" },
  //   { id: 2, label: "All products", to: "/products/all" },
  //   { id: 3, label: "All sales", to: "/sales/all" },
  // ];

  const checkClass = ({ isActive }) => (isActive ? s.active : "");

  const basket = useSelector(({ basket }) => basket);
  const totalItems = basket.reduce((acc, { count }) => acc + count, 0);

  const nav_links = useRef();

  const navBtnOnClick = () => {
    const links = nav_links.current;
    links.classList.toggle(s.links_show);
  };

  return (
    <section className={s.nav}>
      <div className={s.firstBlock}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <NavLink to="/category">
          <button>Catalog</button>
        </NavLink>
      </div>
      <div className={s.all_links} ref={nav_links}>
        <div className={s.secondBlock}>
          <div className={s.links}>
            <NavLink className={checkClass} to="/">
              Main page
            </NavLink>
            <NavLink className={checkClass} to="/products/all">
              All products
            </NavLink>
            <NavLink className={checkClass} to="/sales/all">
              All sales
            </NavLink>
          </div>
          <div className={s.icons}>
            <div className={s.user_icon}>
              <Link to="/account/registration_form">
                <img src={user} alt="user" />
              </Link>
            </div>
            <NavLink to="/basket">
              <img src={shopping_bag} alt="basket"  className={s.basket}/>
              <span className={s.counter}>
                {totalItems === 0 ? "" : totalItems}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      <button onClick={navBtnOnClick} className={s.nav_btn}>
        <MenuOutlined />
      </button>
    </section>
  );
}
