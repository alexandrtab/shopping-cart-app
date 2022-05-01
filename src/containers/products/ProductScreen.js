import { useEffect } from "react";
import { ProductItem } from "../../components/products/ProductItem";
import { ProductContainerStyle } from "../../styles/ProductScreen";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";

export const ProductScreen = () => {
	const dispatch = useDispatch();
	const productsList = useSelector((state) => state.productsList);
	const { loading, error, products } = productsList;
	useEffect(() => {
		dispatch(listProducts());
		console.log(productsList);
	}, [dispatch]);

	return (
		<div>
			<h1>Products</h1>
			<ProductContainerStyle primary>
				{products.map((item, index) => (
					<ProductItem key={index} item={item} />
				))}
			</ProductContainerStyle>
		</div>
	);
};
