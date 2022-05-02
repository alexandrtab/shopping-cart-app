import { ProductItemStyle, CartAddButton } from "../../styles/ProductScreen";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../actions/cartActions";

export const ProductItem = ({ item }) => {
	const dispatch = useDispatch();
	const addToCartHandler = () => {
		dispatch(addProductToCart(item));
	};
	return (
		<ProductItemStyle primary>
			<img style={{ width: "100px" }} src={item.image} alt={item.title} />
			<h3>{item.title}</h3>
			<p
				style={{
					fontSize: "30px",
					fontWeight: "300",
					color: "black",
					margin: "0px",
				}}
			>
				{"$" + item.price}
			</p>
			<p>{item.qtyInStock}</p>
			<p style={{ fontSize: "10px", color: "gray" }}>{item.description}</p>
			<CartAddButton onClick={addToCartHandler} primary>
				Add To Cart
			</CartAddButton>
		</ProductItemStyle>
	);
};
