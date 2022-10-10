window.onload = loginLoad;

function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	var name = urlParams.get("firstname");
	const usrname = urlParams.get("username");
	const passwrd = urlParams.get("password");

	var passwordInput = document.forms["myLogin"]["password"].value;
	var usernameInput = document.forms["myLogin"]["username"].value;

	if(passwordInput == passwrd && usernameInput == usrname){
		alert("Welcome! "+name);
	}
	else{
		alert("Error: Wrong password or username");
	}
	return false;
}

			