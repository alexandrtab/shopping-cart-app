import { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
	const { googleSignIn, user } = UserAuth();
	const navigate = useNavigate();

	const handleGoogleSignIn = () => {
		googleSignIn().then(() => {
			navigate("/account");
		});
	};

	useEffect(() => {
		if (user != null) {
			navigate("/account");
		}
	}, [user]);

	return (
		<div
			style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
		>
			<h1>Sign up 👇</h1>
			<GoogleButton onClick={handleGoogleSignIn} />
		</div>
	);
};
