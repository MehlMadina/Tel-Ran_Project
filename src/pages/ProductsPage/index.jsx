import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { load_products } from "../../store/asyncAction/products";
import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(load_products(id));
  }, []);
  console.log(products);

  return (
    <div>
      <h1>{categories.title}</h1>
      <div>
        {products.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
