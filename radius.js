var setRadius = function(newRadius) {
    if (newRadius < minRad) {
        newRadius = minRad;
    } else if (newRadius > maxRad) {
        newRadius = maxRad;
    }
    radius = newRadius;
    context.lineWidth = radius * 2;

    radSpan.innerHTML = radius;
}

var minRad = 5,
    maxRad = 100,
    defaultRad = 10,
    interval = 5;
    radSpan = document.getElementById('radval')
minRadius = document.getElementById('minRadius')
plusRadius = document.getElementById('plusRadius')


minRadius.addEventListener('click',function(){
	setRadius(radius-interval);
})
plusRadius.addEventListener('click',function(){
	setRadius(radius+interval);
})

setRadius(defaultRad);