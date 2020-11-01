let libro1 = document.getElementById('uno');
let libro2 = document.getElementById('dos');
let reg = document.getElementById('tres');
let sig = document.getElementById('cuatro');
let pag1 = document.getElementById('p1');
let pag2 = document.getElementById('p2');
let pag3 = document.getElementById('p3');
let pag4 = document.getElementById('p4');
let pag5 = document.getElementById('p5');
let pag6 = document.getElementById('p6');
let pag7 = document.getElementById('p7');
let pag8 = document.getElementById('p8');
let pag9 = document.getElementById('p9');

function siguiente(){
	libro2.style.display = 'block';
}
siguiente.addEventListener('mausedown',siguiente);

function libroabierto(){
	libro2.style.display = 'block';
}
libroabierto.addEventListener('siguiente', libroabierto);
