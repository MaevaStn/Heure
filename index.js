var button = document.getElementById("btn");

btn.addEventListener("click", function() {
  var nombre = document.getElementById("valeur").value; // récupère la valeur de l'input

  if (nombre >= 10 && nombre <= 20) { // si le nombre est inférieur ou égal à 10 et inférieur ou égal à 20
    document.getElementById("reponse").innerHTML = "C'est correct !"
  }
  if (nombre < 10) { // si le nombre est inférieur à 10
    document.getElementById("reponse").innerHTML = "Plus grand !"
  }
  if (nombre > 20) { // si le nombre est supérieur à 20
    document.getElementById("reponse").innerHTML = "Plus petit !"
  }

});
