(function() {
    emailjs.init("ioeOTFoxcV74jYCfy");
})();

document.getElementById("formInscripcion").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_lmyzuvt", "template_br9hi4f", {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        correo: document.getElementById("correo").value,
        cedula: document.getElementById("cedula").value,
        telefono: document.getElementById("telefono").value
    })
    .then(function() {
        alert("Inscripción enviada correctamente 💜");
    }, function(error) {
        alert("Error: " + JSON.stringify(error));
    });
});
