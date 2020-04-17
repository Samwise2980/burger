$(() => {
  $(".devourer").on("click", function () {
    const id = $(this).data("id");
    // const devoured = $(this).data("devoured");

    const eatState = { value: true };

    $.ajax(`/api/burgers/${id}/devoured`, {
      type: "PUT",
      data: JSON.stringify(eatState),
      contentType: "application/json; charset=UTF-8",
    }).then(() => {
      location.reload();
    });
  });

  $(".create-burg").on("submit", (event) => {
    event.preventDefault();

    const newBurg = {
      name: $("#burgy").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurg,
    }).then(() => {
      location.reload();
    });
  });
});
