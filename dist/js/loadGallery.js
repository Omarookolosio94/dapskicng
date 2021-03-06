$(document).ready(function () {
  var display = $("#projectList");

  $.ajax({
    type: "GET",
    url: "./data/gallery.json",
    success: function (result) {
      const item = result.slice(0, 5);

      $.each(item, function (key, val) {
        var div;

        if (val.completed == true) {
          div =
            '<div class="project">' +
            '<div class="project-action add-to-like">' +
            "<span>Completed</span>" +
            '<i class="fas fa-check-circle"></i>' +
            "</div>" +
            "<div>" +
            '<div class="project-img">' +
            "<img src=" +
            val.img +
            " " +
            'alt="project" />' +
            "</div>" +
            "</div>" +
            '<div class="project-detail">' +
            '<p class="project-info">' +
            val.name +
            "</p>" +
            "</div>" +
            "</div>";
        } else {
          div =
            '<div class="project">' +
            '<div class="project-action add-to-like">' +
            "<span>Completed</span>" +
            '<i class="fas fa-check-circle"></i>' +
            "</div>" +
            "</div>" +
            '<div class="project-img">' +
            "<img src=" +
            val.img +
            " " +
            'alt="project" />' +
            "</div>" +
            "</div>" +
            '<div class="project-detail">' +
            '<p class="project-info">' +
            val.name +
            "</p>" +
            "</div>" +
            "</div>";
        }
        display.prepend(div);
      });
    },
  });
});
