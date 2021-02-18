import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD_gkEaKWKUyFiF2kYzMQuDST42gQFGiHE",
	authDomain: "facebook-clone-de286.firebaseapp.com",
	projectId: "facebook-clone-de286",
	storageBucket: "facebook-clone-de286.appspot.com",
	messagingSenderId: "857026212822",
	appId: "1:857026212822:web:10d1e01cf575ea36eb6a77",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
