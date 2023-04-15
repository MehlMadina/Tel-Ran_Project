import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLoadProductsAction } from '../../store/asyncAction/allProducts';
import ProductItem from '../../components/ProductItem';

export default function AllProductsPage() {

const dispatch = useDispatch();

const all_products = useSelector(state => state.all_products);

useEffect(() => {
    dispatch(asyncLoadProductsAction)
}, []);

  return (
    <div>
        {
            all_products.map(el => <ProductItem key={el.id} {...el}/>)
        }
    </div>
  )
}
