(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function UserInterestFormHandler() {}

  UserInterestFormHandler.prototype.addNextButtonHandler = function() {
    $(document).on("submit", function(event) {
      event.preventDefault();

      var userdata = JSON.parse(localStorage["userdata"]);
      userdata["interest1"] = $(".interest1").text();
      userdata["interest2"] = $(".interest2").text();
      userdata["interest3"] = $(".interest3").text();
      userdata["interest4"] = $(".interest4").text();
      userdata["interest5"] = $(".interest5").text();
      localStorage["userdata"] = JSON.stringify(userdata);
      //console.log("Interest 1=" + userdata["interest1"] +" Interest 2=" +userdata["interest2"]+" Interest 3="+userdata["interest3"]);
      //console.log(" Firstname" + userdata["firstname"]);
      window.location.href = "screen3.html";
    });
  };

  UserInterestFormHandler.prototype.addInputHandler = function() {
    $("#interest").on("keypress", function(event) {

      if (event.keyCode === 13) {
        var count = 0;
        $("#warningmessage").text("");
        $("#warningmessage").css("background-color", "white");
        var interestvalue = $("#interest").val();
        if ($(".interestdiv1").css("display") === "none") {
          $(".interest1").text(interestvalue);
          $(".interestdiv1").css("display", "block");
          $("#interest").val("");
          $(document).ready(function() {
            $("#closebutton1").click(function() {
              $(".interest1").text("");
              $(".interestdiv1").css("display", "none");
              count--;
              console.log("Count-- "+count);
              if (count < 3) {
                $("#nextbutton").prop("disabled", true);
              }
            });
          });
        } else if ($(".interestdiv2").css("display") === "none") {
          //console.log($(".interest1").text());
          var tempInterest1 = $(".interest1").text();
          if (tempInterest1 === interestvalue) {
            $("#warningmessage").text("Duplicate entries are not allowed.");
            $("#warningmessage").css("background-color", "yellow");
          } else {
            $(".interest2").text(interestvalue);
            $(".interestdiv2").css("display", "block");
            $("#interest").val("");
            $(document).ready(function() {
              $("#closebutton2").click(function() {
                $(".interest2").text("");
                $(".interestdiv2").css("display", "none");
                count--;
                console.log("Count-- "+count);
                if (count < 3) {
                  $("#nextbutton").prop("disabled", true);
                }
              });
            });
          }
        } else if ($(".interestdiv3").css("display") === "none") {
          var tempInt1 = $(".interest1").text();
          var tempInt2 = $(".interest2").text();
          if (tempInt1 === interestvalue || tempInt2 === interestvalue) {
            $("#warningmessage").text("Duplicate entries are not allowed.");
            $("#warningmessage").css("background-color", "yellow");
          } else {
            $(".interest3").text(interestvalue);
            $(".interestdiv3").css("display", "block");
            $("#interest").val("");
            $(document).ready(function() {
              $("#closebutton3").click(function() {
                $(".interest3").text("");
                $(".interestdiv3").css("display", "none");
                count--;
                if (count < 3) {
                  $("#nextbutton").prop("disabled", true);
                }
              });
            });
          }
        } else if ($(".interestdiv4").css("display") === "none") {
          var temp_Int1 = $(".interest1").text();
          var temp_Int2 = $(".interest2").text();
          var temp_Int3 = $(".interest3").text();
          if (temp_Int1 === interestvalue || temp_Int2 === interestvalue || temp_Int3 === interestvalue) {
            $("#warningmessage").text("Duplicate entries are not allowed.");
            $("#warningmessage").css("background-color", "yellow");
          } else {
            $(".interest4").text(interestvalue);
            $(".interestdiv4").css("display", "block");
            $("#interest").val("");
            $(document).ready(function() {
              $("#closebutton4").click(function() {
                $(".interest4").text("");
                $(".interestdiv4").css("display", "none");
                count--;
                if (count < 3) {
                  $("#nextbutton").prop("disabled", true);
                }
              });
            });
          }
        } else if ($(".interestdiv5").css("display") === "none") {
          var tempInt_1 = $(".interest1").text();
          var tempInt_2 = $(".interest2").text();
          var tempInt_3 = $(".interest3").text();
          var tempInt_4 = $(".interest4").text();
          if (tempInt_1 === interestvalue || tempInt_2 === interestvalue || tempInt_3 === interestvalue || tempInt_4 === interestvalue) {
            $("#warningmessage").text("Duplicate entries are not allowed.");
            $("#warningmessage").css("background-color", "yellow");
          } else {
            $(".interest5").text(interestvalue);
            $(".interestdiv5").css("display", "block");
            $("#interest").val("");
            $(document).ready(function() {
              $("#closebutton5").click(function() {
                $(".interest5").text("");
                $(".interestdiv5").css("display", "none");
                count--;
                if (count < 3) {
                  $("#nextbutton").prop("disabled", true);
                }
              });
            });
          }
        }


        //var interestarray = [".interest1", ".interest2",".interest3",".interest4",".interest5"];
        //for()
        if ($(interestarray[0]).text().length > 0) {
          count++;
        }
        if ($(".interest2").text().length > 0) {
          count++;
        }
        if ($(".interest3").text().length > 0) {
          count++;
        }
        if ($(".interest4").text().length > 0) {
          count++;
        }
        if ($(".interest5").text().length > 0) {
          count++;
        }
        if (count >= 3) {
          $("#nextbutton").prop("disabled", false);
        }
        console.log("Count= "+count);
        event.preventDefault();
      }
    });
  };


  App.UserInterestFormHandler = UserInterestFormHandler;
  window.App = App;
})(window);
