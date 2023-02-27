document.getElementById("negro").onclick = function () {
  document.body.style.backgroundColor="black";
};

document.getElementById("fuente").onclick = function () {
  document.body.style.fontFamily= 'Courier New', "Courier", "monospace";
};
document.getElementById("lorem").onclick = function () {
document.getElementById('lorem2').style.display='block';
};
document.getElementById("hora").onclick = function () {
  document.getElementById('hora2').innerHTML = Date() ;
  document.getElementById('hora2').style.display='block';



};








