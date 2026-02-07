var lista = ['videos/video1.mp4', 'videos/video2.mp4', 'videos/video5.mp4'];
var indice = 1;

window.addEventListener("load", function () {

    video.onended = function () {

        video.style.opacity = 0; // se desvanece

        setTimeout(function () {
            video.src = lista[indice];   // CAMBIO AQUÍ
            indice = (indice + 1) % lista.length;
            video.play();

            video.style.opacity = 1; // vuelve a aparecer
        }, 600);
    };
});
