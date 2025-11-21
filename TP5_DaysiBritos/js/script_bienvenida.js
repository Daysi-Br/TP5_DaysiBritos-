function guardarNombre() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    if (nombre === "" || apellido === "") {
        alert("Completa tu nombre y apellido");
        return;
    }

    localStorage.setItem("usuario", nombre + " " + apellido);

    document.getElementById("mensaje").innerText =
        "Bienvenido, " + nombre + " " + apellido;
}

window.onload = () => {
    let usuario = localStorage.getItem("usuario");
    if (usuario) {
        document.getElementById("mensaje").innerText =
            "Bienvenido de nuevo, " + usuario;
    }
};
