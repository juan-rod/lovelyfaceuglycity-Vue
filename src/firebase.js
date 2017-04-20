import Firebase from 'firebase';

 let config = {
    apiKey: "AIzaSyCIF4o3M1OKuFGVKy4k5s2Gf3aMRz7s7lE",
    authDomain: "lovelyfaceuglycity.firebaseapp.com",
    databaseURL: "https://lovelyfaceuglycity.firebaseio.com",
    projectId: "lovelyfaceuglycity",
    storageBucket: "lovelyfaceuglycity.appspot.com",
    messagingSenderId: "997628556408"
  };


const app = Firebase.initializeApp(config);

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = app.database();