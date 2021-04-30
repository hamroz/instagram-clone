
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyABUgLU5_CORyirMaVA6RgdD41rbAK687g",
    authDomain: "instagram-clone-react-13439.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-13439.firebaseio.com",
    projectId: "instagram-clone-react-13439",
    storageBucket: "instagram-clone-react-13439.appspot.com",
    messagingSenderId: "638952902902",
    appId: "1:638952902902:web:38ffe2c23d861d62401cd7",
    measurementId: "G-C999MH1KE9"

});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };