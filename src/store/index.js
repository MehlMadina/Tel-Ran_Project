import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { categoriesReducer } from "./reducer/categoriesReducer";
import { categoryProductsReducer } from "./reducer/productsReducer";
import { productsReducer } from "./reducer/allProductsReducer";
import { productReducer } from "./reducer/productReducer";
import { basketReducer } from "./reducer/basketReducer";


const rootReducer = combineReducers({
    categories: categoriesReducer,
    products : categoryProductsReducer,
    all_products: productsReducer,
    product: productReducer,
    basket: basketReducer
    
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
