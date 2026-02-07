window.addEventListener("load", () => {
    document.addEventListener("keydown", (evento) => {
        if (evento.shiftKey && evento.key.toUpperCase() === 'H') {
            window.location.href = "contacto.html";
        }
    });
});