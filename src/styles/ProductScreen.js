import styled from "styled-components";

export const ProductContainerStyle = styled.div`
	width: 80%;
	margin: 2% auto;
	height: 100%;
	border-radius: 7px;
	background-color: ${(props) => (props.primary ? "#f2f2f2" : "#343a40")};
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

export const ProductItemStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 300px;
	background-color: ${(props) => (props.primary ? "white" : "#919aa1")};
	margin: 2rem;
	padding: 1rem;
`;

export const PageHeading = styled.h1`
	margin: 45px auto;
	text-align: center;
	font-size: 4rem;
`;
export const CartAddButton = styled.button`
	font-family: "futura-pt-n7", "futura-pt", Tahoma, Geneva, Verdana, Arial,
		sans-serif;
	font-style: normal;
	font-weight: 700;
	width: 100%;
	background-color: #018849;
	display: table;
	text-align: center;
	color: #fff;
	letter-spacing: 2px;
	height: 41px;
	text-transform: uppercase;
	border: 0;
	cursor: pointer;
	padding: 0;
	font-size: 14px;
	margin-top: 20px;
	width: 100%;
	transition: all 0.5s;
	&:hover {
		background-color: #004726;
		cursor: pointer;
	}
`;

export const NavBarStyle = styled.nav`
	width: 80%;
	background-color: black;
	height: 150px;
	margin: 0 auto;
	display: flex;
	justify-content: space-evenly;
	flex-direction: row;

	ul {
		margin: 0;
		padding: 0;
		text-align: center;
		display: flex;
		list-style: none;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
	li {
		margin: 0 auto;
		a {
			font-size: 2rem;
			text-decoration: none;
			transition: all 1s;
			color: white;
			&:hover {
				background-color: white;
				border: 1px solid black;
				color: black;
				padding: 0.4rem;
				border-radius: 10px;
			}
		}
	}
`;
