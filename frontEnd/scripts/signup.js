(function(window) {
  "use strict";
  var SERVER_URL = "http://localhost:2403/userverification";
  var App = window.App;
  var SignupFormHandler = App.SignupFormHandler;
  var RemoteDataStore = App.RemoteDataStore;
  var UserData = App.UserData;

  var remoteDS = new RemoteDataStore(SERVER_URL);
  var userData = new UserData("ncc-1701", remoteDS);

  var signUpFormHandler = new SignupFormHandler();
  signUpFormHandler.addPasswordInputHandler();
  signUpFormHandler.addRePasswordInputHandler();
  signUpFormHandler.addNextButtonHandler(function(signupuserdata) {
    userData.createUserData.call(userData, signupuserdata);
  });
})(window);
