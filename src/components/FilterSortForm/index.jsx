import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { searchPrice, sortProducts } from "../../store/reducer/productsReducer";

export default function FilterSearchForm() {

  const dispatch = useDispatch();

  const search_price = (event) => {
    event.preventDefault();
    const { min, max } = event.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(searchPrice({ min_value, max_value }));
  };

  const order = (event) => dispatch(sortProducts(event.target.value));

  return (
    <div className={s.container}>
      <div className={s.filter_section}>
        <span>Price:</span>
        <form onSubmit={search_price}>
          <input
            type="number"
            name="min"
            placeholder="from"
            min="0"
            onChange={search_price}
          />
          <input
            type="number"
            name="max"
            placeholder="to"
            onChange={search_price}
          />
          <button>Search</button>
        </form>
      </div>
      
      <div className={s.discount_checkbox}>
        <span>Discounted items</span>
        <input type="checkbox"/>
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
