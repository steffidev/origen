window.addEventListener("load", function () {
    document.getElementById("cookieDialog").showModal();
});

function aceptar() {
    document.getElementById("cookieDialog").close();
}

function rechazar() {
    location.href = "https://duckduckgo.com";
}