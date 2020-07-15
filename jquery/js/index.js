const $ = require("jQuery");

$(function () {
  const $msg = $("#msg");
  $msg.fadeOut("slow", function () {
    $msg.text("jQuery").css("color", "red").fadeIn("slow");
  });
});
