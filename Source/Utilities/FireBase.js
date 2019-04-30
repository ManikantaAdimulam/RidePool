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

const FireBaseManager = {
  createRide: (userId, from, to, seats, name, contact, date, time) => {
    return db.ref("rides/").push({
      from,
      to,
      seats,
      name,
      contact,
      date,
      time,
      userId
    });
  },
  getFromDB: (userId, rides) => {
    return db.ref("rides/").on("value", snapshot => {
      var mobile = "";
      if (snapshot.val()) {
        mobile = snapshot.val();
      }
      rides(mobile);
    });
  }
};

const db = app.database();

export { db, FireBaseManager };
