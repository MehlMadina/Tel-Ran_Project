const defaultState = [];

const LOAD_CATEGORY_PRODUCTS = "LOAD_CATEGORY_PRODUCTS";

export const loadCategoryProductsAction = (payload) => ({
  type: LOAD_CATEGORY_PRODUCTS,
  payload,
});

export const categoryProductsReducer = (state = defaultState, action) => {
  if (action.type === LOAD_CATEGORY_PRODUCTS) {
    return action.payload;
  } else {
    return state;
  }
};
