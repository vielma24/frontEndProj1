(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function LoginFormHandler() {}

  LoginFormHandler.prototype.addNextButtonHandler = function(fn) {
    $(document).on("submit", function(event) {
      event.preventDefault();

      this.validatepassword($("#password").val());

      var loginuserdata = {};
      loginuserdata["email"] = $("#email").val();
      loginuserdata["password"] = $("#password").val();

      fn(loginuserdata);

      //window.location.href = "screen1.html";
    });
    $("#selection li a").click(function() {
      var selection = $(this).attr("title");
      //console.log("selection=" + selection);
      if (selection === "Signup") {
        window.location.href = "signup.html";
      }
    });
  };

  LoginFormHandler.prototype.validatepassword = function(password) {

    var illegalChars = /[\W_]/; // allow only letters and numbers
    var error = "";

    if (password.value == "") {
      password.style.background = "Yellow";
      error = "You didn't enter a password.\n";
      $("#errormessage").text(error);
      return false;

    } else if ((password.value.length < 8) || (password.value.length > 12)) {
      error = "The password is of the wrong length. \n";
      password.style.background = "Yellow";
      alert(error);
      return false;

    } else if (illegalChars.test(password.value)) {
      error = "The password contains illegal characters.\n";
      password.style.background = "Yellow";
      alert(error);
      return false;

    } else if ((password.value.search(/[a-zA-Z]+/) == -1) || (password.value.search(/[0-9]+/) == -1)) {
      error = "The password must contain at least one numeral.\n";
      password.style.background = "Yellow";
      alert(error);
      return false;

    } else {
      password.style.background = "White";
    }
    return true;
  };

  App.LoginFormHandler = LoginFormHandler;
  window.App = App;
})(window);
