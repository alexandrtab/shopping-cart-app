import { Link } from "react-router-dom";
import { NavBarStyle } from "../../styles/ProductScreen";
import { UserAuth } from "../../context/AuthContext";

export const Navbar = () => {
	const { user, logOut } = UserAuth();

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<>
			<NavBarStyle>
				<ul>
					<li>
						<Link to="/products">Products</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
					{user?.displayName ? (
						<button onClick={handleSignOut}>Log out</button>
					) : (
						<li>
							<Link to="/signup">Sign up</Link>
						</li>
					)}
				</ul>
			</NavBarStyle>
		</>
	);
};
