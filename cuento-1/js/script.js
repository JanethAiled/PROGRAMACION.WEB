const pr1 = document.getElementById('pr1');
const pr2 = document.getElementById('pr2');
const boton3 = document.getElementById('boton3');
const boton4 = document.getElementById('boton4');
const boton5 = document.getElementById('boton5');
const boton6 = document.getElementById('boton6');
const boton7 = document.getElementById('boton7');
const boton8 = document.getElementById('boton8');
const boton9 = document.getElementById('boton9');
const boton10 = document.getElementById('boton10');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');
const a6 = document.getElementById('a6');
const a7 = document.getElementById('a7');
const a8 = document.getElementById('a8');
const a9 = document.getElementById('a9');
const a10 = document.getElementById('a10');
const pag1 = document.getElementById('p1');
const pag2 = document.getElementById('p2');
const pag3 = document.getElementById('p3');
const pag4 = document.getElementById('p4');
const pag5 = document.getElementById('p5');
const pag6 = document.getElementById('p6');
const pag7 = document.getElementById('p7');
const pag8 = document.getElementById('p8');
const pag9 = document.getElementById('p9');

// atras
// 1 atras
pr1.onclick = function(){
	pag1.style.visibility='hidden';
	boton3.style.visibility='hidden';
	pr2.style.visibility='visible';
	pr1.style.visibility='hidden';
 }
 
 a2.onclick = function(){
	pag2.style.visibility='hidden';
	pag1.style.visibility='visible';
	boton4.style.visibility='hidden';
	boton3.style.visibility='visible';
	a2.style.visibility='hidden';
	pr1.style.visibility='visible';
 }
 a3.onclick = function(){
	pag3.style.visibility='hidden';
	pag2.style.visibility='visible';
	boton5.style.visibility='hidden';
	boton4.style.visibility='visible';
 }
 a4.onclick = function(){
	pag4.style.visibility='hidden';
	pag3.style.visibility='visible';
	boton6.style.visibility='hidden';
	boton5.style.visibility='visible';
 }
 a5.onclick = function(){
	pag5.style.visibility='hidden';
	pag4.style.visibility='visible';
	boton7.style.visibility='hidden';
	boton6.style.visibility='visible';
 }
 a6.onclick = function(){
	pag6.style.visibility='hidden';
	pag5.style.visibility='visible';
	boton8.style.visibility='hidden';
	boton7.style.visibility='visible';
 }
a7.onclick = function(){
	pag7.style.visibility='hidden';
	pag6.style.visibility='visible';
	boton9.style.visibility='hidden';
	boton10.style.visibility='visible';
 }
 a8.onclick = function(){
	pag8.style.visibility='hidden';
	pag7.style.visibility='visible';
	
 }
 a9.onclick = function(){
	boton9.style.visibility='visible';
	pag9.style.visibility='hidden'
	pag8.style.visibility='visibility';
	
 }

// siguientes
// inicio
 pr2.onclick = function(){
	pr1.style.visibility = 'visible';
	pag1.style.visibility ='visible';
	pr2.style.visibility='hidden';
	boton3.style.visibility='visible';
 }
 // sig 1
 boton3.onclick = function(){
 	a2.style.visibility='visible';
 	pr1.style.visibility='hidden';
 	pag1.style.visibility='hidden';
 	pag2.style.visibility='visible';
 	boton3.style.visibility='hidden';
	boton4.style.visibility='visible';
 }
 boton4.onclick = function(){
 	a3.style.visibility='visible';
 	a2.style.visibility='hidden';
 	pag2.style.visibility='hidden';
 	pag3.style.visibility='visible';
 	boton4.style.visibility='hidden';
	boton5.style.visibility='visible';
 }
  boton5.onclick = function(){
  	a4.style.visibility='visible';
 	a3.style.visibility='hidden';
 	pag3.style.visibility='hidden';
 	pag4.style.visibility='visible';
 	boton5.style.visibility='hidden';
	boton6.style.visibility='visible';
 }
  boton6.onclick = function(){
  	a5.style.visibility='visible';
 	a4.style.visibility='hidden';
 	pag4.style.visibility='hidden';
 	pag5.style.visibility='visible';
 	boton6.style.visibility='hidden';
	boton7.style.visibility='visible';
 }
  boton7.onclick = function(){
  	a6.style.visibility='visible';
 	a5.style.visibility='hidden';
 	pag5.style.visibility='hidden';
 	pag6.style.visibility='visible';
 	boton7.style.visibility='hidden';
	boton8.style.visibility='visible';
 }
  boton8.onclick = function(){
  	a7.style.visibility='visible';
 	a6.style.visibility='hidden';
 	pag6.style.visibility='hidden';
 	pag7.style.visibility='visible';
 	boton8.style.visibility='hidden';
	boton9.style.visibility='visible';
 }
 boton9.onclick = function(){
 	a8.style.visibility='visible';
 	a7.style.visibility='hidden';
 	pag7.style.visibility='hidden';
 	pag8.style.visibility='visible';
 	boton9.style.visibility='hidden';
 	boton10.style.visibility='visible';
 }
 boton10.onclick = function(){
 	a9.style.visibility='visible';
 	pag8.style.visibility='hidden';
 	pag9.style.visibility='visible';
 	boton10.style.visibility='hidden';
 }




