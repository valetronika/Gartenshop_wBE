import {configureStore,combineReducers} from '@reduxjs/toolkit'
import  productList  from "./reducers/ProductsListReducer";
import  categoriesReducer  from "./reducers/CategoryReducer";
import CartReducer from './reducers/CartReducer';
// import CartReducer from './reducers/CartReducer';
// import { productReducer } from "./reducers/ProductReducer";



const rootReducer = combineReducers(
    {
        products: productList,
        categories: categoriesReducer,
        cart: CartReducer,
    }
)
// const store = configureStore(rootReducer, applyMiddleware(thunk))
const store = configureStore( {reducer:rootReducer})
export default   store