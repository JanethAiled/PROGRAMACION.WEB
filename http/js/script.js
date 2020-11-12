let carac1 = document.getElementById('ca_uno');
let carac2 = document.getElementById('ca_dos');
let carac3 = document.getElementById('ca_tres');
let carac4 = document.getElementById('ca_cuatro');
const btn_1= document.getElementById('btn_1');
const img1 = document.getElementById('img1');
const btn_2= document.getElementById('btn_2');
const img2 = document.getElementById('img2');


	
carac1.onmouseover = function(){
	carac1.style.backgroundColor = '#FAE39C';
	carac2.style.backgroundColor = '#FAE39C';
	carac3.style.backgroundColor = '#FAE39C';
	carac4.style.backgroundColor = '#FAE39C';
}

btn_1.onclick = function(){
	img1.style.visibility = 'visible';
}

btn_2.onclick = function(){
	img2.style.visibility = 'visible';
}





