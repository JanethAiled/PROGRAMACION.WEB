let carac1 = document.getElementById('ca_uno');
let carac2 = document.getElementById('ca_dos');
let carac3 = document.getElementById('ca_tres');
let carac4 = document.getElementById('ca_cuatro');
const Toca_aqui = document.getElementById('btn_1');
const img1 = document.getElementById('img1');


	
carac1.onmouseup = function(){
	carac1.style.backgroundColor = '#FAE39C';
	carac2.style.backgroundColor = '#FAE39C';
	carac3.style.backgroundColor = '#FAE39C';
	carac4.style.backgroundColor = '#FAE39C';
}

Toca_aqui.onclick = function(){
	img1.style.visibility = 'visible';
}





