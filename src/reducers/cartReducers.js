import {
	CART_ITEM_ADD_FAIL,
	CART_ITEM_ADD_REQUEST,
	CART_ITEM_ADD_SUCCESS,
	CART_ITEM_REMOVE_SUCCESS,
	CART_ITEM_REMOVE_FAIL,
	CART_ITEM_UPDATE_REQUEST,
} from "../constants/cartConstants";

export const listCartItemsReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case CART_ITEM_UPDATE_REQUEST:
			return { loading: true, cartItems: [] };
		case CART_ITEM_REMOVE_SUCCESS:
			return { loading: false, cartItems: action.payload };
		case CART_ITEM_REMOVE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
export const addItemToCartReducer = (state = { newCartItem: {} }, action) => {
	switch (action.type) {
		case CART_ITEM_ADD_REQUEST:
			if (state.cartItems) {
				return {
					cartItems: [...state.cartItems, action.payload],
				};
			}
			return {
				cartItems: [action.payload],
			};
		case CART_ITEM_ADD_SUCCESS:
			return {
				loading: false,
				newCartItem: action.payload,
			};
		case CART_ITEM_ADD_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
