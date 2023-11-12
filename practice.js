const firebaseConfig = {
  apiKey: "AIzaSyBY0v1OHMrvNYNAFg8pvhKIyvQwPkqeQs4",
  authDomain: "kwitter2-4f1df.firebaseapp.com",
  projectId: "kwitter2-4f1df",
  storageBucket: "kwitter2-4f1df.appspot.com",
  messagingSenderId: "255527070399",
  appId: "1:255527070399:web:467ea2492cb807c55ef40a",
  measurementId: "G-FJ1W7G9WEK"
};
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


