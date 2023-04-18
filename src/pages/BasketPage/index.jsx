import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import BasketItem from '../../components/BasketItem';

export default function BasketPage() {

const dispatch = useDispatch();
const basket = useSelector(state => state.basket);

  return (
    <div>
      <div>
        <h2>Shopping cart</h2>
        {
            basket.map(el => <BasketItem key={el.id} {...el}/>)
        }
      </div>
    </div>
  )
}
