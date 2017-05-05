var color1 = "#"+((1<<24)*Math.random()|0).toString(16)
var color2 = "#"+((1<<24)*Math.random()|0).toString(16)
var color3 = "#"+((1<<24)*Math.random()|0).toString(16)
var color4 = "#"+((1<<24)*Math.random()|0).toString(16)
var color5 = "#"+((1<<24)*Math.random()|0).toString(16)
var color6 = "#"+((1<<24)*Math.random()|0).toString(16)
var color7 = "#"+((1<<24)*Math.random()|0).toString(16)
var color8 = "#"+((1<<24)*Math.random()|0).toString(16)
var color9 = "#"+((1<<24)*Math.random()|0).toString(16)
var color10 = "#"+((1<<24)*Math.random()|0).toString(16)
var colors = [color1, color2, color3, color4, color5, color6, color7, color8, color9, color10]

for(var i=0, n=colors.length;i<n;i++){
	var swatch = document.createElement('div');
	swatch.className = 'swatch';
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click', setSwatch);
	document.getElementById('colors').appendChild(swatch);
}

function setColor(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName('active')[0];
	if (active) {
		active.className = 'swatch';
	}
}

function setSwatch(e) {
	// identificeert swatch
	var swatch = e.target;
	//zet kleur
	setColor(swatch.style.backgroundColor);
	//geeft active class
	swatch.className += ' active';
}

setSwatch({target: document.getElementsByClassName('swatch')[0]});