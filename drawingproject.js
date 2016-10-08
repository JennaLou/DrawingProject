var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');


canvas.fillStyle = "#ffff1a";
canvas.fillRect(400, 150, 500,5000);

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(570,350,60,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#0099cc";
canvas.arc(570,350,35,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(570,350,16,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(730,350,60,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#0099cc";
canvas.arc(730,350,35,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(730,350,16,0,2*Math.PI,true);
canvas.fill();

canvas.fillStyle = "black";
canvas.fillRect(530, 510, 260, 4);
