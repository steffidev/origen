window.addEventListener("load", function() {
    document.addEventListener("keydown", function(evento) {
        if (evento.shiftKey && evento.key.toUpperCase() === 'Q') {
            window.location.href = "contacto.html";
        }
    });
});