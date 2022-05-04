import {
	CartItemStyle,
	CartDeleteButtonStyle,
	CartInfoStyle,
} from "../../styles/CartScreen";
import { useDispatch } from "react-redux";
import {
	updateCartCounter,
	deleteItemFromCart,
} from "../../actions/cartActions";
import { useState } from "react";

export const CartItem = ({ item }) => {
	const dispatch = useDispatch();
	const [stateQty, setStateQty] = useState(item.qtyInCart);

	const handleCartDelete = () => {
		dispatch(deleteItemFromCart(item.id));
	};

	const handleQtyChange = (e, id, stateQty) => {
		setStateQty(Number(e.target.value));
		dispatch(updateCartCounter(id, stateQty));
	};
	return (
		<>
			<CartItemStyle>
				<img
					style={{ maxWidth: "150px", maxHeight: "150px" }}
					src={item.image}
					alt={item.title}
				/>
				<CartInfoStyle>
					<h3>Title</h3>
					<h4>{item.title}</h4>
				</CartInfoStyle>

				<CartInfoStyle>
					<h3>Price</h3>
					<h4>
						<span style={{ fontWeight: 600, marginRight: "2px" }}>$</span>
						{item.price}
					</h4>
				</CartInfoStyle>

				<CartInfoStyle>
					<h3>Qty In Cart</h3>
					<input
						type="number"
						min="1"
						value={stateQty}
						onChange={(e) => {
							handleQtyChange(e, item.id, stateQty);
						}}
					/>
				</CartInfoStyle>

				<CartDeleteButtonStyle primary onClick={handleCartDelete}>
					Delete
				</CartDeleteButtonStyle>
			</CartItemStyle>
		</>
	);
};
