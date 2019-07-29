var valuea = parseInt(prompt("Digite o coeficiente a: "));
var valueb = parseInt(prompt("Digite o coeficiente b: "));
var valuec = parseInt(prompt("Digite o coeficiente c: "));
var quadradodeb = valueb * valueb;
console.log(quadradodeb);
var delta = quadradodeb - 4 * (valuea * valuec);
console.log(delta);

if (delta < 0) {
  document.body("Não é possível calcular o Delta pois é menor que zero.");
}
if (delta === 0) {
  document.body("O Delta é zero, portanto os valores de X1 e X2 serão iguais.<br>");
}

var negativevalueb = valueb * (-1);
var raizdelta = Math.sqrt(delta);
var division = 2 * valuea;
var resultadox1 = (negativevalueb + raizdelta) / division;
var resultadox2 = (negativevalueb - raizdelta) / division;

    
    document.write("∆ = " + quadradodeb + " - 4 X " + valuea + " X " + valueb);
    document.write("<br>∆ = " + delta);

    document.write("<br><br>X1 = " + quadradodeb + " + " + raizdelta + " / " + division);
    document.write("<br>X1 = " +resultadox1);

    document.write("<br><br>X2 = " + quadradodeb + " - " + raizdelta + " / " + division);
    document.write("<br>X2 = " +resultadox2);
  