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
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : error ? (
				<div>{error}</div>
			) : (
				<>
					<h1>Products</h1>
					<ProductContainerStyle primary>
						{products.map((item) => (
							<ProductItem item={item} />
						))}
					</ProductContainerStyle>
				</>
			)}
		</>
	);
};
