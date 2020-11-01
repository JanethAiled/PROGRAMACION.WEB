let img = document.getElementById('uno');
let btn = document.getElementById('Enviar');

function aparecer_imagen(){
	img.style.display = 'block';
}
btn.addEventListener('mausedown',aparecer_imagen);