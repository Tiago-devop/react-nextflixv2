import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyC2xzdoxpaZL2juUFmG4_Ao0-jzrv41BF4",
  authDomain: "netflix-react-v2.firebaseapp.com",
  projectId: "netflix-react-v2",
  storageBucket: "netflix-react-v2.appspot.com",
  messagingSenderId: "925877608999",
  appId: "1:925877608999:web:1dfcd04a771c9913cb6402",
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
