import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ProductScreen } from "./containers/products/ProductScreen";
import { CartScreen } from "./containers/cart/CartScreen";
import { Navbar } from "./containers/navbar/Navbar";
import { Account } from "./components/auth/Account";
import { Home } from "./components/auth/Home";
import { SignUp } from "./components/auth/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/auth/Protected";

function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/account" element={<Account />} />
					<Route path="/SignUp" element={<SignUp />} />
					<Route path="/products" element={<ProductScreen />} />
					<Route path="/cart" element={<CartScreen />} />
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
