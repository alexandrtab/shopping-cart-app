import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LogOutButton } from "../../styles/ProductScreen";

export const Account = () => {
	const { logOut, user } = UserAuth();
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
		<div
			style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			<h1>Account</h1>
			<h3>Welcome, {user?.displayName} 👋!</h3>
			<LogOutButton onClick={handleSignOut}>Log out</LogOutButton>
		</div>
	);
};
