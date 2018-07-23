(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function UserProfessionFormHandler() {}

  UserProfessionFormHandler.prototype.addNextButtonHandler = function() {
    $(document).on("submit", function(event) {
      event.preventDefault();
      var userdata = JSON.parse(localStorage["userdata"]);
      userdata["profession1"] = $(".profession1").text();
      userdata["profession2"] = $(".profession2").text();
      userdata["profession3"] = $(".profession3").text();
      localStorage["userdata"] = JSON.stringify(userdata);
      //console.log("Interest 1=" + userdata["interest1"] +" Profession 1=" +userdata["profession1"]+" Profession 2="+userdata["profession2"]);
      //console.log(" Firstname" + userdata["firstname"]);
      window.location.href = "screen4.html";
    });
  };

  UserProfessionFormHandler.prototype.addInputHandler = function() {
    $("#profession").on("keypress", function(event) {
      if (event.keyCode === 13) {
        var professionvalue = $("#profession").val();
        if ($(".professiondiv1").css("display") === "none") {
          $(".profession1").text(professionvalue);
          $(".professiondiv1").css("display", "block");
          $("#profession").val("");
          $(document).ready(function() {
            $("#closebutton1").click(function() {
              $(".profession1").text("");
              $(".professiondiv1").css("display", "none");
            });
          });
        } else if ($(".professiondiv2").css("display") === "none") {
          $(".profession2").text(professionvalue);
          $(".professiondiv2").css("display", "block");
          $("#profession").val("");
          $(document).ready(function() {
            $("#closebutton2").click(function() {
              $(".profession2").text("");
              $(".professiondiv2").css("display", "none");
            });
          });
        } else if ($(".professiondiv3").css("display") === "none") {
          $(".profession3").text(professionvalue);
          $(".professiondiv3").css("display", "block");
          $("#profession").val("");
          $(document).ready(function() {
            $("#closebutton3").click(function() {
              $(".profession3").text("");
              $(".professiondiv3").css("display", "none");
            });
          });
        }
        event.preventDefault();
      }
    });
  };

  App.UserProfessionFormHandler = UserProfessionFormHandler;
  window.App = App;
})(window);
