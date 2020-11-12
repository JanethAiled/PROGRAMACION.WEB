const btn_1= document.getElementById('btn_uno');
const btn_2 = document.getElementById('btn_dos');
const btn_3= document.getElementById('btn_tres');
const btn_4= document.getElementById('btn_cuatro');
const img1= document.getElementById('img1');
const img2 = document.getElementById('img2');
let prr1 = document.getElementById('btu');
let prr2 = document.getElementById('btd');
let prr3 = document.getElementById('btt');
let prr4 = document.getElementById('btc');

btn_1.onclick = function(){
	prr1.style.visibility = 'visible';
}
btn_2.onclick = function(){
	prr2.style.visibility = 'visible';
	img1.style.visibility = 'visible';
}
btn_3.onclick = function(){
	prr3.style.visibility = 'visible';
	img2.style.visibility = 'visible';
}
btn_4.onclick = function(){
	prr4.style.visibility = 'visible';
}


