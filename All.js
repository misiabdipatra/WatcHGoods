// NAVBAR RESPONSIVE
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// CONTACT US
function valdate(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var country = document.getElementById("country")
    var message = document.getElementById("message").value
    var agreement = document.getElementById("agreement")

    if(name.length < 3){
        document.getElementById("error_message").innerHTML = "Please Enter Your Full Name<br>"
    }
    else if(email.endsWith("@gmail.com") == false){
        alert("Email must be gmail.com")
    }
    else if(!Indonesia.checked && !Australia.checked && !Korea.checked && !Jepang.checked && !Malaysia.checked){
        alert("Please choose your country of origin from the options")
    }
    else if(!agreement.checked){
        alert("You must agree with our terms and conditions to register")
    }
}