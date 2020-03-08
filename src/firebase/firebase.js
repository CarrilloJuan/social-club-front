import Firebase from "firebase/app";
import "firebase/auth";
import credentials from "./credentials";

const App = Firebase.initializeApp(credentials.config);
export const Auth = App.auth();
