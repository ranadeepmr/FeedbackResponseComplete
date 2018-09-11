var config = {
    apiKey: "AIzaSyCaSXTs8YL_uo16tJlBLJionCcjSt2XrQ0",
    authDomain: "user-feedback-rana.firebaseapp.com",
    databaseURL: "https://user-feedback-rana.firebaseio.com",
    projectId: "user-feedback-rana",
    storageBucket: "user-feedback-rana.appspot.com",
    messagingSenderId: "599032196228"
  };
  firebase.initializeApp(config);
  database = firebase.database();

  var ref = database.ref('messages');
  ref.on('value',gotData, errData);
  
function gotData(data){
	
	//console.log(data.val());
	var messages = data.val();
	var keys = Object.keys(messages);
	console.log(keys);
	for(var i=0; i<keys.length; i++){
	var k = keys[i];
	var name =  messages[k].name;
	var company =  messages[k].company;
	var email =  messages[k].email;
	var phone =  messages[k].phone;
	var message =  messages[k].message;
	//console.log(name,company,email,phone,message);
	//var =createElement('li', name + ': ' + name);
	//li.parent('scorelist');

}

}


function errData(err){
	console.log('Error!');
	console.log(err);
}


var messagesRef = firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  saveMessage(name, company, email, phone, message);
  document.querySelector('.alert').style.display = 'block';
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}


