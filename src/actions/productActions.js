import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
} from "../constants/productConstants";
import { products } from "../constants/products";

export const listProducts = () => (dispatch) => {
	const productsData = [];
	try {
		dispatch({
			type: PRODUCT_LIST_REQUEST,
		});
		products.forEach((product) => {
			productsData.push(product);
		});
		console.log(productsData);
		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: productsData });
		console.log(productsData);
	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload:
				error.response && error.response.message
					? error.response.data.message
					: error.message,
		});
	}
};