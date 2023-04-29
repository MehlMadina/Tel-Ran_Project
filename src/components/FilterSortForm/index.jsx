import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { resetFilterProducts, searchPrice, showSaleProducts, sortProducts } from "../../store/reducer/productsReducer";

export default function FilterSearchForm() {

  const dispatch = useDispatch();

  const [ price, setPrice ] = useState({min: -Infinity, max: Infinity});
  const [ sale, setSale ] = useState(false);


  const max_price = (event) => {
    setPrice((el) => ({ ...el, max: +event.target.value || Infinity }));
  };

  const min_price = event => {
    setPrice(el => ({...el, min: +event.target.value || -Infinity }));
    dispatch(searchPrice(price));
  }


  useEffect(() => {
    dispatch(searchPrice(price))
  }, [price]);


  const checkboxStatus = (sale) => {
    setSale(sale);
    if (sale) {
      dispatch(showSaleProducts());
    } else {
      dispatch(resetFilterProducts());
    }
  };


  const order = (event) => dispatch(sortProducts(event.target.value));


  return (
    <div className={s.container}>
      <div className={s.filter_section}>
        <span>Price:</span>
          <input
            type="number"
            placeholder="from"
            onChange={min_price}
          />

          <input
            type="number"
            placeholder="to"
            onChange={max_price}
          />
      </div>
      
      <div className={s.discount_checkbox}>
        <span>Discounted items</span>
        <input type="checkbox" checked={sale} onChange={() => checkboxStatus(!sale)}/>
      </div>

      <div className={s.sort_section}>
        <span>Sorted: </span>
        <select onInput={order}>
          <option value="default">default</option>
          <option value="title">name</option>
          <option value="price">price</option>
        </select>
      </div>
    </div>
  );
}
