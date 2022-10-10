window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var password = document.forms["myForm"]["password"].value;
    var retypepassword = document.forms["myForm"]["retypePassword"].value;

    if(password != retypepassword){
        document.getElementById("errormsg").innerHTML = "Wrong Password";
        return false;
    }
}