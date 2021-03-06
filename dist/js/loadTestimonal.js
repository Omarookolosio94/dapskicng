$(document).ready(function () {
  var display = $("#testimonalList");

  $.ajax({
    type: "GET",
    url: "./data/testimonal.json",
    success: function (result) {
      const item = result;

      $.each(item, function (key, val) {
        var div;

        div =
          '<div class="testimonal">' +
          '<p class="testimonal-text">' +
          ' " ' +
          val.testimonal +
          ' " ' +
          "</p>" +
          '<div class="testimonal-details">' +
          '<p class="name">' +
          val.name +
          "</p>" +
          '<span class="position">' +
          val.position +
          "</span>" +
          "</div>" +
          "</div>";

        display.prepend(div);
      });
    },
  });
});
