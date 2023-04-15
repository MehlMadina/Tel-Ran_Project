import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { categoriesReducer } from "./reducer/categoriesReducer";
import { categoryProductsReducer } from "./reducer/productsReducer";
import { productsReducer } from "./reducer/allProductsReducer";
import { productReducer } from "./reducer/productReducer";


const rootReducer = combineReducers({
    categories: categoriesReducer,
    products : categoryProductsReducer,
    all_products: productsReducer,
    product: productReducer
    
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
