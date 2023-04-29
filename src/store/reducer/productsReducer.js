const defaultState = [];

const LOAD_CATEGORY_PRODUCTS = "LOAD_CATEGORY_PRODUCTS";
const SORT_PRODUCTS = "SORT_PRODUCTS";
const SEARCH_PRICE = "SEARCH_PRICE";
const SHOW_SALE_PRODUCTS = "SHOW_SALE_PRODUCTS";
const RESET_FILTER_PRODUCTS = "RESET_FILTER_PRODUCTS";


export const loadCategoryProductsAction = (payload) => ({type: LOAD_CATEGORY_PRODUCTS, payload});
export const sortProducts = (payload) => ({ type: SORT_PRODUCTS, payload });
export const searchPrice = (payload) => ({ type: SEARCH_PRICE, payload });
export const showSaleProducts = () => ({ type: SHOW_SALE_PRODUCTS});
export const resetFilterProducts = () => ({ type: RESET_FILTER_PRODUCTS});


export const categoryProductsReducer = (state = defaultState, action) => {
  if (action.type === LOAD_CATEGORY_PRODUCTS) {
    return action.payload.map(el => ({
      ...el,
      show: { price: true },
      show_sale: true
    }));
  } else if (action.type === SORT_PRODUCTS) {
    if (action.payload === "default") {
      return state;
    } else if (typeof state[0][action.payload] === "string") {
      state.sort((a, b) => a[action.payload].localeCompare(b[action.payload]));
    } else {
      state.sort((a, b) => a[action.payload] - b[action.payload]);
    }
    return [...state];
  } else if (action.type === SEARCH_PRICE) {
    const { min, max} = action.payload;
    return state.map((el) => {
      el.show.price = el.price <= max && el.price >= min
      return el;
    });
  } else if (action.type === SHOW_SALE_PRODUCTS) {
    state = state.map(el => ({
      ...el,
      show_sale: el.discont_price ? true : false
    }))
    return [...state]
  } else if (action.type === RESET_FILTER_PRODUCTS) {
    state = state.map(el => ({
      ...el,
      show_sale: true
    }))
    return state
  } else {
    return state;
  }
};