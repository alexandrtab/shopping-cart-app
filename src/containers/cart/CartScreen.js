import { CartContainerStyle } from "../../styles/CartScreen";
import { CartItem } from "../../components/cart/CartItem";
import Bounce from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux";
import { listCartItems } from "../../actions/cartActions";
import { useEffect } from "react";

export const CartScreen = () => {
	const dispatch = useDispatch();

	const cartItemsList = useSelector((state) => state.cartItemsList);

	const { loading, error, cartItems } = cartItemsList;

	useEffect(() => {
		dispatch(listCartItems());
	}, [dispatch]);
	const handleRenderCarts = (...key) => {
		switch (key) {
			case loading:
				return <h1>Loading...</h1>;
			case error:
				return <div>{error}</div>;
			default:
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
		}
	};
	return <> {handleRenderCarts(loading, error, cartItems)}</>;
};
