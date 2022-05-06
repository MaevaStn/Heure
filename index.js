btn.addEventListener("click", function() {
  let button = document.getElementById("btn");
  var heure = document.getElementById("heure").value;
  var min = document.getElementById("min").value;
  var secondes = document.getElementById("sec").value;
  heureFuture(heure, min, secondes)
});

function heureFuture(heure, min, secondes) {
  if (heure >= 23) {
    heure = 0
  } else if (min == 59 && secondes == 59) {
    heure++
  }
  if (min == 59) {
    min = 0;
  } else if (min) {
    min++;
  }
  if (secondes == 59) {
    secondes = 0;
  } else {
    secondes++
  }
  document.getElementById("result").innerHTML = "Dans une seconde, il sera " + heure + "h " + min + " min et " + secondes + " secondes";
}
