function validate() {
	var username = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("confirm-password").value;
	var ans=true;
	if (username == "" || email == "" || password == "" || confirmPassword == "") {
		alert("Please fill in all fields.");
		ans=false;
		return false;
	}

	if (password != confirmPassword) {
		alert("Passwords do not match.");
		ans=false;   
		return false;
	}
	if(ans==true){
		window.location.href = "index.html";
	}
}
