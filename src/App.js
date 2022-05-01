import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ProductScreen } from "./containers/products/ProductScreen";
import { Navbar } from "./containers/navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/products" element={<ProductScreen />} />
				{/* <Route path="/cart" element={<CartScreen />} /> */}
			</Routes>
		</div>
	);
}

export default App;
