function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var ans=true;

	if (username == "" || password == "") {
		alert("Please fill in all fields.");
		ans= false;
		return false;
	}
	if(ans==true){
		window.location.href = "index.html";
	}
}
    