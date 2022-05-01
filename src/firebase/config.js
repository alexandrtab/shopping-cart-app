import { intializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA_uuT2UoC7a9eLEvI8JQxeBmwL-1Y4Jrc",
	authDomain: "shopping-cart-app-551ea.firebaseapp.com",
	projectId: "shopping-cart-app-551ea",
	storageBucket: "shopping-cart-app-551ea.appspot.com",
	messagingSenderId: "706851865502",
	appId: "1:706851865502:web:6bde4527cf69ba40724c8f",
};
const app = intializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
