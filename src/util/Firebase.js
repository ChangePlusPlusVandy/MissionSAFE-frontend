import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAQbNwThFZ-WRgtksCYFnF3gUsNLlWhTQw",
    authDomain: "missionsafe-b864f.firebaseapp.com",
    projectId: "missionsafe-b864f",
    storageBucket: "missionsafe-b864f.appspot.com",
    messagingSenderId: "951792828625",
    appId: "1:951792828625:web:1c13841089709309a9c5f0",
    measurementId: "G-WDTJ02P1QM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Firebase = {
    async registerUser(email, password) {
        let userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        return userCredentials.user.uid;
    },

    async loginUser(email, password) {
        let userCredentials = await signInWithEmailAndPassword(auth, email, password);
        return userCredentials.user.uid;
    }
}

export default Firebase