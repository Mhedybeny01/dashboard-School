function validation(event) {
    // Prevent the form from submitting
    event.preventDefault();

    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    var usernamerror = document.getElementById('usernamerror');
    var passworderror = document.getElementById('passworderror');
    var allcorrected = document.getElementById('allcorrected');


    // Clear previous error messages
    usernamerror.textContent = "";
    passworderror.textContent = "";
   

    // Validate username and password
    if (username !== "ecomehdy" && password === "123456") {
        usernamerror.textContent = "Username incorrect";
    } else if (username === "ecomehdy" && password !== "123456") {
        passworderror.textContent = "Password incorrect";
    } else if (username !== "ecomehdy" && password !== "123456") {
        usernamerror.textContent = "Username incorrect";
        passworderror.textContent = "Password incorrect";
    } else {
        // If both username and password are correct, you can proceed
        allcorrected.style.display = "block";
        setTimeout(function() {
            // Redirect to another page, e.g., "dashboard.html"
            window.location.href = "dashboard.html";
        }, 700);
        allcorrected.event.preventDefault();
        document.getElementById('loging').submit(); // Submit the form
    }
}

