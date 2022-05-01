import { ProductItem } from "../../components/products/ProductItem";
import { products } from "../../constants/products";
import { ProductContainerStyle } from "../../styles/ProductScreen";
export const ProductScreen = () => {
	return (
		<div>
			<h1>Products</h1>
			<ProductContainerStyle primary>
				{products.map((item) => (
					<ProductItem item={item} />
				))}
			</ProductContainerStyle>
		</div>
	);
};
