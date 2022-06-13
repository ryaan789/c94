var firebaseConfig = {
      apiKey: "AIzaSyCR52nVrbQUz_boX7laXXNC2oHQcSMjxpg",
      authDomain: "kwitter-672b2.firebaseapp.com",
      databaseURL: "https://kwitter-672b2-default-rtdb.firebaseio.com",
      projectId: "kwitter-672b2",
      storageBucket: "kwitter-672b2.appspot.com",
      messagingSenderId: "87593479132",
      appId: "1:87593479132:web:d152e8ed907e3eb7f93d19"
    };
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
