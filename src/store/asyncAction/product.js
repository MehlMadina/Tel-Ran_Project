import { loadProductAction } from "../reducer/productReducer";

export const asyncLoadProductAction = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3333/products/${id}`)
      .then((resp) => resp.json())
      .then((json) => dispatch(loadProductAction(json[0])));
  };
};
