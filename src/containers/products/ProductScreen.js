import { useEffect } from "react";
import { ProductItem } from "../../components/products/ProductItem";
import { products } from "../../constants/products";
import { ProductContainerStyle } from "../../styles/ProductScreen";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";

export const ProductScreen = () => {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts());
		console.log(productList);
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
