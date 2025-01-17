function validate() {
	var email = document.getElementById("email").value;
	var ans=true;
	if (email == "") {
		alert("Please enter your email address.");
		ans=false;
		return false;
	}
	if(ans==true){
		alert("Password reset instructions have been sent to your email address.");
		window.location.href = "login.html";
	}
}
    