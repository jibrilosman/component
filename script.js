function validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function validation() {
    let fnameInput = document.getElementById("fname").value;
    let lnameInput = document.getElementById("lname").value;
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;

    if(fnameInput === "") {
        document.getElementById("error1").style.visibility = "visible";
        document.getElementById("small-1").style.visibility = "visible";
        document.getElementById("fname").style.border = "1px solid hsl(0, 100%, 74%) "
    } else {
        document.getElementById("error1").style.display = "none";
        document.getElementById("small-1").style.display = "none";
        document.getElementById("fname").style.border = "1px solid rgb(191, 191, 191)"
    }
    //

    if(lnameInput === "") {
        document.getElementById("error2").style.visibility = "visible";
        document.getElementById("small-2").style.visibility ="visible";
        document.getElementById("lname").style.border = "1px solid hsl(0, 100%, 74%) "
    } else {
        document.getElementById("error2").style.display = "inline-block";
        document.getElementById("small-2").style.display = "inline-block";
        document.getElementById("lname").style.border = "1px solid rgb(191, 191, 191)"
    }

    //
    if(validateEmail(emailInput)) {
        document.getElementById("error3").style.display = "none";
        document.getElementById("small-3").style.display = "none";
        document.getElementById("email").style.border = "1px solid hsl(0, 100%, 74%)";
        document.getElementById("email").style.border = "1px solid rgb(191, 191, 191)"
    } else {
        document.getElementById("error3").style.visibility = "visible";
        document.getElementById("small-3").style.visibility = "visible";
        document.getElementById("email").style.border = "1px solid hsl(0, 100%, 74%)"
    }

    //
    if(passwordInput === "") {
        document.getElementById("error4").style.visibility = "visible";
        document.getElementById("small-4").style.visibility ="visible";
        document.getElementById("password").style.border = "1px solid hsl(0, 100%, 74%) "
    } else {
        document.getElementById("error4").style.display = "none";
        document.getElementById("small-4").style.display = "none";
        document.getElementById("password").style.border = "1px solid rgb(191, 191, 191)"       
    }

}