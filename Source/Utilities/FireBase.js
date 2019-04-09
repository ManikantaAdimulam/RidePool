import Firebase from "firebase";

const config = {
  apiKey: "AIzaSyAdlNw-KO1bd938pYzB3yxlo0WjVyBvQ40",
  authDomain: "ride-5ac9c.firebaseapp.com",
  databaseURL: "https://ride-5ac9c.firebaseio.com",
  projectId: "ride-5ac9c",
  storageBucket: "ride-5ac9c.appspot.com",
  messagingSenderId: "996313310360"
};
let app = Firebase.initializeApp(config);

export const db = app.database();
