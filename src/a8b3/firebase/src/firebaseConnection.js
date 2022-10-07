import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCqxF3CPHRzZnbEdGY7su4q8om13AnmtAg",
    authDomain: "curso-react-caf1b.firebaseapp.com",
    projectId: "curso-react-caf1b",
    storageBucket: "curso-react-caf1b.appspot.com",
    messagingSenderId: "849693402266",
    appId: "1:849693402266:web:49f70117ecbaf4bc4a6b23",
    measurementId: "G-XJ4N6WNS5F"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };