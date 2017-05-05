var clearcanvas = document.getElementById('clear');

clearcanvas.addEventListener('click', clear);

function clear() {
context.clearRect(0, 0, canvas.width, canvas.height);

}