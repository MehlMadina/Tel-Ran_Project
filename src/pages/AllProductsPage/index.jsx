import React, { useEffect } from "react";
import ProductsItem from "../../components/ProductsItem";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncLoadProductsAction } from "../../store/asyncAction/products";


export default function AllProductsPage() {

  const { category } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoadProductsAction)
  }, []);

  const products = useSelector(({ products }) => {
    if (category === undefined) {
      return products;
    }
     return products.filter((item) => item.category === category);
  });


  return (
    <div>
      {products.map((el) => (
        <ProductsItem key={el.id} {...el} />
      ))}
    </div>
  );
}
