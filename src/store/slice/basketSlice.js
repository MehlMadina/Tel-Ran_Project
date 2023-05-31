import { createSlice } from "@reduxjs/toolkit";

const writeToLocalStorage = (basket) => localStorage.setItem('basket', JSON.stringify(basket));

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    list: JSON.parse(localStorage.getItem("basket")) ?? [],
  },
  reducers: {

    addBasket: (state, { payload }) => {
      const product = state.list.find((el) => el.id === payload);
      if (product === undefined) {
        state.list = [...state.list, { id: payload, count: 1 }];
        writeToLocalStorage(state.list);
      } else {
        product.count++;
        state.list = [...state.list];
        writeToLocalStorage(state.list);
      }
    },

    decrementCount: (state, { payload }) => {
      const product = state.list.find((el) => el.id === payload);
      product.count--;
      if (product.count === 0) {
        state.list = state.list.filter((item) => item !== product);
        writeToLocalStorage(state.list);
      }
      state.list = [...state.list];
      writeToLocalStorage(state.list);
    },

    incrementCount: (state, { payload }) => {
      const product = state.list.find((el) => el.id === payload);
      product.count++;
      state.list = [...state.list];
      writeToLocalStorage(state.list);
    },

    deleteProduct: (state, {payload}) => {
        state.list = state.list.filter((el) => el.id !== payload);
        writeToLocalStorage(state.list);
    },

    clearBasket: (state) => {
        state.list = [];
        writeToLocalStorage(state.list);
      },
  },
});

export const { addBasket, decrementCount, incrementCount, deleteProduct, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;

