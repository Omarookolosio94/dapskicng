var data;
$(document).ready(function () {
  var display = $("#projects-list-box");

  $.ajax({
    type: "GET",
    url: "./data/gallery.json",
    success: function (result) {
      data = result;
      const item = result.slice(0, 10);

      $.each(item, function (key, val) {
        var div;

        if (val.completed == true) {
          div =
            '<div class="project-section-item" ' +
            "id=" +
            val.id +
            " " +
            ">" +
            '<div class="project-list-action add-to-like">' +
            "<span>Completed</span>" +
            '<i class="fas fa-check-circle"></i>' +
            "</div>" +
            '<div href="project.html">' +
            '<div class="project-item-img">' +
            "<img src=" +
            val.img +
            " " +
            'alt="project" class="project-pic" />' +
            "</div>" +
            "</div>" +
            '<div class="project-item-detail">' +
            '<h4 class="project-item-title">' +
            val.name +
            "</h4>" +
            '<p class="project-item-info"></p>' +
            "</div>" +
            "</div>";
        } else {
          div =
            '<div class="project-section-item" ' +
            "id=" +
            val.id +
            " " +
            ">" +
            '<div class="project-list-action add-to-like">' +
            "<span>In Progress</span>" +
            '<i class="fas fa-spinner"></i>' +
            "</div>" +
            '<div href="project.html">' +
            '<div class="project-item-img">' +
            "<img src=" +
            val.img +
            " " +
            'alt="project" class="project-pic" />' +
            "</div>" +
            "</div>" +
            '<div class="project-item-detail">' +
            '<h4 class="project-item-title">' +
            val.name +
            "</h4>" +
            '<p class="project-item-info"></p>' +
            "</div>" +
            "</div>";
        }
        display.append(div);
      });
    },
  });
});

function LoadMore(int) {
  var displayBox = $("#projects-list-box");
  var lastItem = $(".project-section-item").last()[0].id;

  var result = data.slice(+lastItem, +lastItem + int);

  $.each(result, function (key, val) {
    if (val.id == 27) {
      $("#loadMore").addClass("d-none");
    }

    var div;

    if (val.completed == true) {
      div =
        '<div class="project-section-item" ' +
        "id=" +
        val.id +
        " " +
        ">" +
        '<div class="project-list-action add-to-like">' +
        "<span>Completed</span>" +
        '<i class="fas fa-check-circle"></i>' +
        "</div>" +
        '<div href="project.html">' +
        '<div class="project-item-img">' +
        "<img src=" +
        val.img +
        " " +
        'alt="project" class="project-pic" />' +
        "</div>" +
        "</div>" +
        '<div class="project-item-detail">' +
        '<h4 class="project-item-title">' +
        val.name +
        "</h4>" +
        '<p class="project-item-info"></p>' +
        "</div>" +
        "</div>";
    } else {
      div =
        '<div class="project-section-item" ' +
        "id=" +
        val.id +
        " " +
        ">" +
        '<div class="project-list-action add-to-like">' +
        "<span>In Progress</span>" +
        '<i class="fas fa-spinner"></i>' +
        "</div>" +
        '<div href="project.html">' +
        '<div class="project-item-img">' +
        "<img src=" +
        val.img +
        " " +
        'alt="project" class="project-pic" />' +
        "</div>" +
        "</div>" +
        '<div class="project-item-detail">' +
        '<h4 class="project-item-title">' +
        val.name +
        "</h4>" +
        '<p class="project-item-info"></p>' +
        "</div>" +
        "</div>";
    }

    displayBox.append(div);
  });
}
