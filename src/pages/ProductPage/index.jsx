import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncLoadProductAction } from "../../store/asyncAction/product";
import { addBasket } from "../../store/reducer/basketReducer";


export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);



  useEffect(() => {
    dispatch(asyncLoadProductAction(id));
  }, []);

  const { title, description, price, image, discont_price } = product;
    const add_to_basket = () => dispatch(addBasket({ id, title, price, discont_price, image }));
  const img = `http://localhost:3333${image}`;

  return (
    <div>
      <div>
        <p>{title}</p>
        <img src={img} alt={title} />
      </div>
      <div>
        <p>{price}$</p>
      </div>
      <div>
        <button onClick={add_to_basket}>Add to cart</button>
        <p>Description</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
