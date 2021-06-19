import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"


const config = {
    apiKey: "AIzaSyDSH5wMInrPS2LuePlQLNlcLqqMDrnsI48",
    authDomain: "crwn-db-b5572.firebaseapp.com",
    projectId: "crwn-db-b5572",
    storageBucket: "crwn-db-b5572.appspot.com",
    messagingSenderId: "625751282753",
    appId: "1:625751282753:web:6cbf257b94cc96086622c0",
    measurementId: "G-GBM0RM3KVC"
};


firebase.initializeApp(config);


export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({"prompt": "select_account"})

export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;
