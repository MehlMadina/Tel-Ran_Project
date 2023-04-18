const defaultState = [];

const ADD_TO_BASKET = "ADD_TO_BASKET";

export const addBasket = payload => ({ type: ADD_TO_BASKET, payload});

const checkProduct = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id);
    if (productInState) {
        productInState.count++
        return [...state]
    } else {
        return [...state, { ...payload, count: 1 }]
    }
}

export const basketReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_BASKET) {
        return checkProduct(state, action.payload);
    } else {
        return state
    }
}