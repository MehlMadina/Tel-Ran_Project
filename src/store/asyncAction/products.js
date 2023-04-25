import { loadCategoryProductsAction } from "../reducer/productsReducer";

export const load_products = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3333/categories/${id}`)
      .then((resp) => resp.json())
      .then((json) => {
        const payload = json.data.map((el) => ({
          ...el,
          hide_mark: false,
        }));
        dispatch(loadCategoryProductsAction(payload));
      });
  };
};


export const order_products = (body) => {
  return dispatch => {
      fetch('http://localhost:3333/order/send', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
      })
          .then(resp => resp.json())
          .then(json => {
              dispatch(console.log(json))
          })
  }
}
