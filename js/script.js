// date
function dateShow(){
	document.getElementById('date').innerHTML= Date();
}

// ex-02
function dataChange(){
	document.getElementById('dateChange').innerHTML='Hello World!';
}

// ex-03
function bulbOn(){
	document.getElementById('bulb').src='images/on.gif'
}
function bulbOff(){
	document.getElementById('bulb').src='images/off.gif'
}

// ex-04
function lightOn(){
	document.getElementById('light').src='images/lighton.png'
}
function lightOff(){
	document.getElementById('light').src='images/lightoff.png'
}

// ex-05
function fontSize(){
	document.getElementById('font_size').style.fontSize='30px';
}
// ex-06
function textHide(){
	document.getElementById('text').style.display='none';
}
function textshow(){
	document.getElementById('text').style.display='block';
}

// ex-07
function math(){
	document.getElementById('math').innerHTML= 5+6;
}

// ex-08
function addMath(){
	document.write(5+6);
}

// ex-09
function plusMath(){
	let a, b, c;a = 8;b = 5;c = a + b;
	document.getElementById('addplus').innerHTML=c;
}

// ex-10
	x = 5;
	y = 6;
	z = x + y;
	document.getElementById("math-05").innerHTML = "The value of z is: " + z;

// ex-11