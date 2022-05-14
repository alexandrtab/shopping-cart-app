import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export const Account = () => {
	const { logOut, user } = UserAuth();

	const handleSignOut = async () => {
		try {
			await logOut();
			return <Navigate to="/" />;
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div>
			<h1>Account</h1>
			<h3>Welcome, {user?.displayName}!</h3>
			<button onClick={handleSignOut}>Log out</button>
		</div>
	);
};
