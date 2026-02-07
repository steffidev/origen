document.getElementById("btnSearch").addEventListener("click", function (e) {
    e.preventDefault();

    const input = document.getElementById("searchInput");
    input.classList.toggle("active");
    input.focus();
});