var i = 0;

//lista fotos que queremos mostrar en la galería
var fotos = [
    'images/senderismo.jpg',
    'images/meditar.jpg',
    'images/animales3.jpg',
    'images/banner4.jpg',
    'images/animales2.jpg',
    'images/senderismo3.jpg',
    'images/equitacion.jpg',
    'images/senderismo2.jpg',
    'images/yogaplaya.jpg',
];

//función que muestra las imágenes de la galería
function mostrar() {
    //recupera las imágenes de la galeria
    let imagenes = document.querySelectorAll('.slides img');

    //coloca las fotos en las imágenes
    for (let j = 0; j < imagenes.length; j++)
        imagenes[j].src = fotos[(i + j) % fotos.length];
}
//desplaza a la izquierda
function avanzar() {
    i = (i + 1) % fotos.length;
    mostrar();
}

//desplaza a la derecha
function retroceder() {
    i = ((i - 1) + fotos.length) % fotos.length;
    mostrar();
}

//cuando cargue completamente el documento
window.onload = function () {

    //comportamiento de los botones
    botonNext.addEventListener('click', avanzar);
    botonBack.addEventListener('click', retroceder);
    
    mostrar();
    setInterval(avanzar, 10000);
}
