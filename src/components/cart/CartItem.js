import {
	CartItemStyle,
	CartDeleteButtonStyle,
	CartInfoStyle,
} from "../../styles/CartScreen";
import { useDispatch } from "react-redux";
import { updateCartQty, deleteItemFromCart } from "../../actions/cartActions";
import { useState } from "react";

export const CartItem = ({ item }) => {
	const dispatch = useDispatch();
	const [stateQty, setStateQty] = useState(item.qtyInCart);

	const handleCartDelete = (cartItemId) => {
		dispatch(deleteItemFromCart(cartItemId));
	};

	const handleCartQty = (itemId, qty) => {
		dispatch(updateCartQty(itemId, qty));
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
							setStateQty(Number(e.target.value));
							console.log(stateQty);
							handleCartQty(item.id, stateQty);
						}}
					/>
				</CartInfoStyle>

				<CartDeleteButtonStyle
					primary
					onClick={() => handleCartDelete(item.id)}
				>
					Delete
				</CartDeleteButtonStyle>
			</CartItemStyle>
		</>
	);
};
