import { ProductItemStyle, CartAddButton } from "../../styles/ProductScreen";

export const ProductItem = ({ item }) => {
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
			<CartAddButton primary>Add To Cart</CartAddButton>
		</ProductItemStyle>
	);
};
