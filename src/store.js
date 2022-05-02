import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "./reducers/productReducer";
import {
	listCartItemsReducer,
	addItemToCartReducer,
} from "./reducers/cartReducers";

const reducer = combineReducers({
	productsList: productListReducer,
	cartItemsList: listCartItemsReducer,
	addToCart: addItemToCartReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
