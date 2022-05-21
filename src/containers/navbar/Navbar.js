import { Link } from "react-router-dom";
import { NavBarStyle } from "../../styles/ProductScreen";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LogOutButton } from "../../styles/ProductScreen";

export const Navbar = () => {
	const { user, logOut } = UserAuth();
	const navigate = useNavigate();

	const handleSignOut = async () => {
		try {
			await logOut();
			navigate("/");
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
						<LogOutButton onClick={handleSignOut}>Log out</LogOutButton>
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
