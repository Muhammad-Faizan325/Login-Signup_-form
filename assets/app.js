function showPass() {
  var showPass = document.getElementById("showPass").previousElementSibling;
  if (showPass.type === "password") {
    showPass.type = "text";
  } else {
    showPass.type = "password";
  }
}

// Sign Up Functionality

function signUpHandler() {
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var userEmail = document.getElementById("userEmail");
  var password = document.getElementById("password");

  var userObj = {
    firstName: firstName.value,
    lastName: lastName.value,
    userEmail: userEmail.value,
    password: password.value,
  };

  var getUsers = localStorage.getItem("users");

  if (!getUsers) {
    var arr = [userObj];
    localStorage.setItem("users", JSON.stringify(arr));
    alert("user Succesfully Signup");
    window.location.href = "./index.html";
  } else {
    var usersArr = JSON.parse(getUsers);

    for (var i = 0; i < usersArr.length; i++) {
      if (userObj.userEmail === usersArr[i].userEmail) {
        alert("Email Already exist");
        return;
      }
    }
    usersArr.push(userObj);
    localStorage.setItem("users", JSON.stringify(usersArr));
    alert("user Succesfully Signup");
    window.location.href = "./index.html";
  }
}

function loginHandler() {}
