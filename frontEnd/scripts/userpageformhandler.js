(function (window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function UserPageFormHandler() {}

  /*ConnectMeLinkFormHandler.prototype.addNextButtonHandler = function(fn) {
    $(document).on("submit", function(event) {
      window.location.href = "userpage.html";
    });
  };*/

  UserPageFormHandler.prototype.updateuserData = function(userdata) {
    console.log("Inside updateuserData");
    var username = userdata.firstname + userdata.lastname;
    var professionAndLocation = "";

    if(userdata.profession1 != "") {
      professionAndLocation += userdata.profession1;
    }
    if(userdata.profession2 != "") {
      professionAndLocation += ", "+ userdata.profession2;
    }
    if(userdata.profession3 != "") {
      professionAndLocation += ", and " + userdata.profession3;
    }

    professionAndLocation += " in "+userdata.location;

    $("#username").text(username);
    $("#userprofessionandlocation").text(professionAndLocation);
    $("#userpagetitle").text(userdata.pagetitle);
  };

  App.UserPageFormHandler = UserPageFormHandler;
  window.App = App;
})(window);
