(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function SignupFormHandler() {}

  SignupFormHandler.prototype.addNextButtonHandler = function(fn) {
    $(document).on("submit", function(event) {
      event.preventDefault();

      var signupuserdata = {};
      signupuserdata["email"] = $("#email").val();
      signupuserdata["username"] = $("#username").val();
      signupuserdata["password"] = $("#password").val();
      signupuserdata["gender"] = $("#gender :selected").text();

      fn(signupuserdata);

      window.location.href = "screen1.html";
    });

    $("#selection li a").click(function() {
      var selection = $(this).attr("title");
      //console.log("selection=" + selection);
      if (selection === "Login") {
        window.location.href = "login.html";
      }
    });
  };

  SignupFormHandler.prototype.addPasswordInputHandler = function() {
    $(document).on("input", "[name=\"password\"]", function(event) {

      var illegalChars = /[\W_]/; // allow only letters and numbers
      var error = "";
      var password = event.target.value;

      if (password == "") {
        error = "Please enter a password.\n";
        $("#passwordHelpInline").css("background-color", "yellow");
        $("#passwordHelpInline").text(error);
        return false;

      } else if ((password.length < 8) || (password.length > 20)) {
        error = "The password must be 8-20 characters long.\n";
        $("#passwordHelpInline").css("background-color", "yellow");
        $("#passwordHelpInline").text(error);
        return false;

      } else if (illegalChars.test(password)) {
        error = "The password contains illegal characters.\n";
        $("#passwordHelpInline").css("background-color", "yellow");
        $("#passwordHelpInline").text(error);
        return false;

      } else if ((password.search(/[a-zA-Z]+/) == -1) || (password.search(/[0-9]+/) == -1)) {
        error = "The password must contain at least one numeral.\n";
        $("#passwordHelpInline").css("background-color", "yellow");
        $("#passwordHelpInline").text(error);
        return false;

      } else {
        $("#passwordHelpInline").text("");
        $("#passwordHelpInline").css("background-color", "white");
      }
      return true;
    });
  };

  SignupFormHandler.prototype.addRePasswordInputHandler = function() {
    $(document).on("input", "[name=\"reenter-password\"]", function(event) {

      var error = "";
      var repassword = event.target.value;
      var password = $("#password").val();

      if (repassword === password) {
        $("#repasswordHelpInline").text("Password Matched");
        $("#repasswordHelpInline").css("background-color", "#15FF15");
        return true;
      } else if (repassword != "" && repassword != password) {
        error = "The password and confirm password do not match.\n";
        $("#repasswordHelpInline").css("background-color", "yellow");
        $("#repasswordHelpInline").text(error);
        return false;
      }
    });
  };

  App.SignupFormHandler = SignupFormHandler;
  window.App = App;
})(window);
