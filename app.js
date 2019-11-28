$(document).ready(function () {
  $("form.portero").change(() => {
    const goalsPerGame = $("#goalsPerGame").val();
    const savesPerGame = $("#savesPerGame").val();
    const shootsSaved = $("#shootsSaved").val();
    const price = (((1/goalsPerGame) * 0.5) + ((savesPerGame / 4) * 0.3) + ((shootsSaved/100) * 0.2)) * 80000;
    $(".priceGoalkeeper p").html("$ " + price.toFixed(2));
  });
  $("form.defenza").change(() => {

  });
  $("form.medio").change(() => {

  });
  $("form.delanter").change(() => {

  });
});