import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEnv } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: getEnv('VITE_FIREBASE_API_KEY'),
    authDomain: "yt-mern-blog.firebaseapp.com",
    projectId: "yt-mern-blog",
    storageBucket: "yt-mern-blog.appspot.com",
    messagingSenderId: "150248092393",
    appId: "1:150248092393:web:34bc9843d732ee4be7f678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }