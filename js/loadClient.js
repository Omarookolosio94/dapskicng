$(document).ready(function () {
  var display = $("#client-list-box");

  $.ajax({
    type: "GET",
    url: "./data/client.json",
    success: function (result) {
      const item = result;

      $.each(item, function (key, val) {
        var div;

        div =
          '<div class="client">' +
          "<img src=" +
          val.img +
          " " +
          "alt=" +
          val.name +
          " />" +
          "<div>";

        display.prepend(div);
      });
    },
  });
});
