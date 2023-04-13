import { productsLoadAction } from "../reducer/productsReducer";

export const asyncLoadProductsAction = async (dispatch) => {
  const response = await fetch("http://localhost:3333/products/all");
  const data = await response.json();
  dispatch(productsLoadAction(data));
};