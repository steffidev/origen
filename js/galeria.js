//cuando cargue la ventana completamente
window.addEventListener('load', function(){
    var figuras = document.querySelectorAll('#galeria figure');

    //para cada figura de la galeria
    for(let figura of figuras){
        figura.onclick = function(){
            //clona la figura en la que se ha hecho clicl y su contenido
            var nuevaFigura = this.cloneNode(true);

            nuevaFigura.className ='grande';

            //hace que se cierre la nueva figura al hacerle clic
            nuevaFigura.onclick = function(){
                this.remove();
            }
            document.body.appendChild(nuevaFigura); //coloca en el body
        }
        
    }
});