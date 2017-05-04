var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var radius = 10;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerWidth;

context.lineWidth = radius * 2;

var putpoint = function(e) {
    if (dragging) {
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }
}
var engage = function(e) {
    dragging = true;
    putpoint(e);
}
var disengage = function() {
    dragging = false;
    context.beginPath();
}




canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mousemove', putpoint);
