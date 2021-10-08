import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyAwt8DzmSoSYNc2cTznoMXEurN0hwZMSJ4",
 authDomain: "complaint-forum-803f4.firebaseapp.com",
 projectId: "complaint-forum-803f4",
 storageBucket: "complaint-forum-803f4.appspot.com",
 messagingSenderId: "637506375132",
 appId: "1:637506375132:web:928b7401c57e7170b31319"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

