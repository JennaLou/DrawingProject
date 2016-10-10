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
canvas.fillRect(540, 510, 260, 4);

canvas.fillStyle = "white";
canvas.fillRect(590, 513, 55, 50);

canvas.fillStyle = "white";
canvas.fillRect(674, 513, 55, 50);

canvas.beginPath();
canvas.fillStyle = "#558000";
canvas.arc(480,200,35,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#558000";
canvas.arc(480,285,20,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#558000";
canvas.arc(810,260,20,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#558000";
canvas.arc(480,580,20,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#558000";
canvas.arc(480,650,35,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#558000";
canvas.arc(810,580,35,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#558000";
canvas.arc(810,650,20,0,2*Math.PI,true);
canvas.fill();

canvas.fillStyle = "#b35900";
canvas.fillRect(400, 700, 500, 100);

canvas.fillStyle = "black";
canvas.fillRect(430, 740, 110, 25);

canvas.fillStyle = "black";
canvas.fillRect(590, 740, 110, 25);

canvas.fillStyle = "black";
canvas.fillRect(740, 740, 110, 25);

canvas.fillStyle = "white";
canvas.fillRect(900, 450, 90, 90);

canvas.fillStyle = "white";
canvas.fillRect(310, 450, 90, 90);

canvas.fillStyle = "yellow";
canvas.fillRect(920, 540, 50, 200);

canvas.fillStyle = "yellow";
canvas.fillRect(330, 540, 50, 200);
