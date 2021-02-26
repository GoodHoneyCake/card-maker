import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBBASE_PROJECT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
