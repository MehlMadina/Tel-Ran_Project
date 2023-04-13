const defaultState = [];
const LOAD_PRODUCTS = "LOAD_PRODUCTS";

export const productsLoadAction = (payload) => ({
  type: LOAD_PRODUCTS,
  payload,
});

export const productsReducer = (state = defaultState, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return action.payload;
  } else {
    return state;
  }
};