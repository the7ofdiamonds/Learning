 var firebaseConfig = {
    apiKey: "AIzaSyAPAZWDdVaO5C0roWiGSetzNG5uLd-qNHc",
    authDomain: "theorb-f3a48.firebaseapp.com",
    databaseURL: "https://theorb-f3a48.firebaseio.com",
    projectId: "theorb-f3a48",
    storageBucket: "theorb-f3a48.appspot.com",
    messagingSenderId: "1073451047758",
    appId: "1:1073451047758:web:7389fd0497fa5d4c071c1f"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const TimeStamp = firebase.firestore.FieldValue.serverTimestamp();
