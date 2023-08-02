let prevScrollpos = window.scrollY || document.documentElement.scrollTop;
const header = document.getElementById("site-header");

window.onscroll = function() {
    const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
    if (prevScrollpos > currentScrollPos) {
        header.classList.remove("header-hidden"); // Mostrar el header al hacer scroll hacia arriba
    } else {
        header.classList.add("header-hidden"); // Ocultar el header al hacer scroll hacia abajo
    }
    prevScrollpos = currentScrollPos;
};

function siguiente() {
    window.location.href = "about.html"
}