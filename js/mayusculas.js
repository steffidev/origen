//pasar los inputs de clase mayusculas a mayusculas


//tras cargar el documento
window.addEventListener('load', function () {

    //recupera todos los inputs de clase 'mayúsculas'

    var inputs = document.querySelectorAll('input.mayusculas');

    for(let input of inputs){
        input.onkeyup = function(){
            this.value = this.value.toUpperCase();
        }
    }


});