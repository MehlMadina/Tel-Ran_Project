import React, { useEffect } from 'react';
import s from "./style.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoadProductsAction } from '../../store/asyncAction/allProducts';
import ProductCard from '../ProductCard';

export default function SalesContainer() {

const dispatch = useDispatch();
const products = useSelector(state => state.all_products);

useEffect(() => {
    dispatch(asyncLoadProductsAction)
}, []);

  return (
    <div className={s.sales_section}>
        <div className={s.sales_header}>
            <h1>Sale</h1>
        </div>
      <div className={s.sales_group}>
        {products
          .filter(({ discont_price }) => discont_price !== null)
          .map((el, index) =>
            index >= 0 && index <= 3 ? <ProductCard key={el.id} {...el} /> : ""
          )}
      </div>
    </div>
  );
}
