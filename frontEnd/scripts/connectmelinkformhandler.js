(function (window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function ConnectMeLinkFormHandler() {}

  ConnectMeLinkFormHandler.prototype.addNextButtonHandler = function(fn) {
    $(document).on("submit", function(event) {
      event.preventDefault();
      event.preventDefault();
      var userdata = JSON.parse(localStorage["userdata"]);
      userdata["connectmelink"] = $("#connectmelink").val();
      localStorage["userdata"] = JSON.stringify(userdata);
      //console.log("Interest 1=" + userdata["interest1"] + " Profession 1=" + userdata["profession1"] + " Profession 2=" + userdata["profession2"]);
      //console.log(" Firstname" + userdata["firstname"] + " Pagetitle= " + userdata["pagetitle"] + " websitelink= " + userdata["websitelink"]);
      console.log(userdata["profilepicturefile"]);
      fn(userdata);
      //window.location.href = "userpage.html";
    });
  };

  App.ConnectMeLinkFormHandler = ConnectMeLinkFormHandler;
  window.App = App;
})(window);
