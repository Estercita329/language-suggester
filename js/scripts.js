$(document).ready(function() {
  $("form#crush").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();

  if (age >= 20 && gender === "male") {
    $("#crush1").show();
  } else if (age >=21 && gender === "female") {
    $("#crush2").show();
  } else if (age <=20 && gender === "male") {
    $("#crush3").show();
  } else {
    $("#crush4").show();
  };

  event.preventDefault();
  });
})