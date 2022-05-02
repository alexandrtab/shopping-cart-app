import { useEffect } from "react";
import { ProductItem } from "../../components/products/ProductItem";
import { ProductContainerStyle } from "../../styles/ProductScreen";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import Fade from "react-reveal/Fade";

export const ProductScreen = () => {
	const dispatch = useDispatch();
	const productsList = useSelector((state) => state.productsList);
	const { loading, error, products } = productsList;
	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	const handleRenderProducts = (...key) => {
		switch (key) {
			case loading:
				return <h1>Loading...</h1>;
			case error:
				return <div>{error}</div>;
			default:
				return (
					<>
						<h1>Products</h1>
						<ProductContainerStyle primary>
							{products.map((item) => (
								<Fade bottom>
									<ProductItem item={item} />
								</Fade>
							))}
						</ProductContainerStyle>
					</>
				);
		}
	};
	return <> {handleRenderProducts(loading, error, products)}</>;
};
