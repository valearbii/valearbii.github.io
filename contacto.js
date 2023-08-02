function mostrarMensajeAgradecimiento() {
    document.getElementById("encuesta-form").style.display = "none";
    document.getElementById("mensaje-agradecimiento").style.display = "block";
  }
  
  /*
  function volverPaginaPrincipal() {
    // Preguntar si quiere volver a la página principal mediante una alerta
    const confirmacion = confirm("¿Deseas volver a la página principal?");
  
    // Si el usuario confirma, redirigir a la página principal
    if (confirmacion) {
      window.location.href = "index.html"; // Reemplaza con la ruta de tu página principal
    }
  }
  */

  function volverPaginaPrincipal() {
    window.location.href ="index.html";
  }
  
  document.getElementById("encuesta-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    mostrarMensajeAgradecimiento();
  });