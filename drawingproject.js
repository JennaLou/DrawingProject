var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');


canvas.fillStyle = "pink";
canvas.beginPath();
canvas.arc(700, 320, 320,320,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(570,150,40,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(800,150,40,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "pink"
canvas.arc(400,100,100,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "pink"
canvas.arc(1000,100,100,0,2*Math.PI,true);
canvas.fill();
