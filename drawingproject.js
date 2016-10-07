var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');


canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.arc(700, 320, 320,320,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(570,150,50,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(800,150,50,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(570,150,28,0,2*Math.PI,true);
canvas.fill()

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(800,150,28,0,2*Math.PI,true);
canvas.fill()

canvas.beginPath();
canvas.fillStyle = "brown";
canvas.arc(590,300,20,0,2*Math.PI,true);
canvas.fill()
