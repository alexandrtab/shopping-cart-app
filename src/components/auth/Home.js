import Cart from "../../assets/thumb2-payment-online-credit-card-4k-online-shopping-credit-card-in-hand.jpg";
import Fade from "react-reveal/Fade";

export const Home = () => {
	return (
		<Fade bottom>
			<h1>Welcome to the Shopping Cart App!</h1>
			<img style={{ width: "80%" }} src={Cart} alt="shopping cart" />
		</Fade>
	);
};
