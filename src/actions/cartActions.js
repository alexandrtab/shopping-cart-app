import {
	CART_ITEM_ADD_FAIL,
	CART_ITEM_ADD_REQUEST,
	CART_ITEM_ADD_SUCCESS,
	CART_ITEM_REMOVE_REQUEST,
	CART_ITEM_REMOVE_SUCCESS,
	CART_ITEM_REMOVE_FAIL,
	CART_ITEM_UPDATE_REQUEST,
	CART_ITEM_UPDATE_SUCCESS,
	CART_ITEM_UPDATE_FAIL,
} from "../constants/cartConstants";
import { db } from "../firebase/config";
import {
	collection,
	getDocs,
	doc,
	setDoc,
	getDoc,
	deleteDoc,
	updateDoc,
} from "firebase/firestore";
import nextId from "react-id-generator";

export const listCartItems = () => async (dispatch) => {
	async function getCartItems(db) {
		const cartCol = collection(db, "cartItems");
		const cartSnapshot = await getDocs(cartCol);
		const cartList = cartSnapshot.docs.map((doc) => doc.data());
		return cartList;
	}

	try {
		dispatch({ type: CART_ITEM_UPDATE_REQUEST });
		const cartData = await getCartItems(db);
		dispatch({ type: CART_ITEM_REMOVE_SUCCESS, payload: cartData });
	} catch (error) {
		dispatch({
			type: CART_ITEM_UPDATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
export const addProductToCart = (newCartItem) => async (dispatch) => {
	const newCartProduct = {};
	const newItemId = nextId();
	try {
		dispatch({
			type: CART_ITEM_ADD_REQUEST,
			payload: newCartProduct,
		});

		const cartItemRef = doc(db, "cartItems", newItemId);

		const docSnap = await getDoc(cartItemRef);

		if (docSnap.exists()) {
			const existItem = docSnap.data();
			alert(existItem.title + " already in cart");
			dispatch({
				type: CART_ITEM_ADD_SUCCESS,
				payload: existItem,
			});
		} else {
			console.log("No such document!");
			await setDoc(doc(db, "cartItems", newItemId), {
				id: newItemId,
				title: newCartItem.title,
				price: newCartItem.price,
				image: newCartItem.image,
				qtyInCart: 1,
			});
			alert(newCartItem.title + " successfully added");

			dispatch({
				type: CART_ITEM_ADD_SUCCESS,
				payload: newCartItem,
			});
		}
	} catch (error) {
		alert("Failed To Add " + newCartItem.title + error);
		dispatch({
			type: CART_ITEM_ADD_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
export const updateCartCounter = (cart_item_id, qty) => async (dispatch) => {
	try {
		dispatch({
			type: CART_ITEM_UPDATE_REQUEST,
		});

		await updateDoc(doc(db, "cartItems", cart_item_id), {
			qtyInCart: qty,
		});

		dispatch({
			type: CART_ITEM_UPDATE_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: CART_ITEM_UPDATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
export const deleteItemFromCart = (cart_item_id) => async (dispatch) => {
	try {
		dispatch({ type: CART_ITEM_REMOVE_REQUEST });

		await deleteDoc(doc(db, "cartItems", cart_item_id));

		alert(cart_item_id + " was successfully deleted");

		window.location.reload();

		dispatch({ type: CART_ITEM_REMOVE_SUCCESS });
	} catch (error) {
		dispatch({
			type: CART_ITEM_REMOVE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
