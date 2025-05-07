function showPass() {
  var showPass = document.getElementById("showPass").previousElementSibling;
  if (showPass.type === "password") {
    showPass.type = "text";
  } else {
    showPass.type = "password";
  }
}

// Sign Up Functionality

function signUp() {
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var userEmail = document.getElementById("userEmail");
  var password = document.getElementById("password");

  var userObj = [
    {
      firstName: firstName.value,
      lastName: lastName.value,
      userEmail: userEmail.value,
      password: password.value,
    },
  ];

  var users = localStorage.getItem("users");

  if (!users) {
    var arr = [userObj];
    localStorage.setItem("users", JSON.stringify(arr));
  } else {
    var usersArr = JSON.parse(users);

    for (var i = 0; i < usersArr.length; i++) {
      if (userObj.email === usersArr[i].email) {
        alert("Email Already exist");
      }
    }
  }
}
