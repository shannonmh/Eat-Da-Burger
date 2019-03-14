// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    console.log(this);
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: true, id: id,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/", {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
