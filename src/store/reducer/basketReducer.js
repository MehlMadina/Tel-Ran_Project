const defaultState = JSON.parse(localStorage.getItem("basket")) ?? [];
const writeToLocalStorage = basket => localStorage.setItem("basket", JSON.stringify(basket));

const ADD_TO_BASKET = "ADD_TO_BASKET";
const DECREMENT_COUNT = "DECREMENT_COUNT";
const INCREMENT_COUNT = "INCREMENT_COUNT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const CLEAR_BASKET = "CLEAR_BASKET";

export const addBasket = payload => ({ type: ADD_TO_BASKET, payload});
export const decrementCount = (payload) => ({ type: DECREMENT_COUNT, payload });
export const incrementCount = (payload) => ({ type: INCREMENT_COUNT, payload });
export const deleteProduct = (payload) => ({ type: DELETE_PRODUCT, payload });
export const clearBasket = () => ({ type: CLEAR_BASKET });


const checkProduct = (state, payload) => {
  const productInState = state.find((el) => el.id === +payload.id);
  if (productInState) {
    productInState.count++;
    writeToLocalStorage(state);
    return [...state];
  } else {
    const newState = [...state, { ...payload, count: 1 }];
    writeToLocalStorage(newState);
    return newState;
  }
};

const incrementQuantity = (state, payload) => {
  const product = state.find((el) => el.id === payload);
  product.count++;
  writeToLocalStorage(state);
  return [...state];
};

const decrementQuantity = (state, payload) => {
  const product = state.find((el) => el.id === payload);
  if (product.count === 1) {
    const newState = [...state.filter((el) => el.id !== payload)];
    writeToLocalStorage(newState);
    return newState;
  } else {
    product.count--;
    writeToLocalStorage(state)
    return [...state];
  }
};



export const basketReducer = (state = defaultState, action) => {
  if (action.type === ADD_TO_BASKET) {
    return checkProduct(state, action.payload);
  } else if (action.type === DECREMENT_COUNT) {
    return decrementQuantity(state, action.payload);
  } else if (action.type === INCREMENT_COUNT) {
    return incrementQuantity(state, action.payload);
  } else if (action.type === DELETE_PRODUCT) {
    const newState =  [...state.filter((el) => el.id !== action.payload)];
    writeToLocalStorage(newState);
    return newState;
  } else if (action.type === CLEAR_BASKET) {
    writeToLocalStorage([])
    return defaultState;
  } else {
    return state;
  }
};