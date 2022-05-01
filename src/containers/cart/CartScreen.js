import { CartContainerStyle } from "../../styles/CartScreen";
import { CartItem } from "../../components/cart/CartItem";
import Bounce from "react-reveal/Fade";

export const CartScreen = () => {
	const cartItems = [
		{
			title: "Good Watch!",
			price: 1999,
			image:
				"https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-1.2.1&",
			qtyInCart: 1,
		},
	];
	return (
		<div>
			<h1>Cart</h1>
			<Bounce left>
				<CartContainerStyle>
					{cartItems.map((item) => (
						<CartItem item={item} key={item.id} />
					))}
				</CartContainerStyle>
			</Bounce>
		</div>
	);
};
