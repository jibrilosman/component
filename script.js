function validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function validation() {
    let fnameInput = document.getElementById("fname").value;
    let lnameInput = document.getElementById("lname").value;
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;

    if(fnameInput == "") {
        document.getElementById("error1").style.visibility = "visible"
        document.getElementById("small-1").style.visibility = "visible"
    }
    else {
        document.getElementById("error1").style.visibility = "hidden"
        document.getElementById("small-1").style.visibility = "hidden"
    }

    if(lnameInput == "") {
        document.getElementById("error2").style.visibility = "visible"
        document.getElementById("small-2").style.visibility = "visible"
    }
    else {
        document.getElementById("error2").style.visibility = "hidden"
        document.getElementById("small-2").style.visibility = "hidden"
    }

    if(validateEmail(emailInput)) {
        document.getElementById("error3").style.visibility = "hidden"
        document.getElementById("small-3").style.visibility = "hidden"
    }
    else {
        document.getElementById("error3").style.visibility = "visible"
        document.getElementById("small-3").style.visibility = "visible"
    }

    if(passwordInput == "") {
        document.getElementById("error4").style.visibility = "visible"
        document.getElementById("small-4").style.visibility = "visible"
    }
    else {
        document.getElementById("error4").style.visibility = "hidden"
        document.getElementById("small-4").style.visibility = "hidden"
    }
}