document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formPresupuesto");
    const producto = document.getElementById("producto");
    const plazo = document.getElementById("plazo");
    const extras = document.querySelectorAll(".extra");
    const presupuestoTotal = document.getElementById("presupuestoTotal");
    function calcularPresupuesto() {
        let total = parseFloat(producto.value);
        extras.forEach(extra => {
            if (extra.checked) total += parseFloat(extra.value);
        });
        const plazoValor = parseInt(plazo.value) || 0;
        if (plazoValor > 30) total *= 0.95;
        presupuestoTotal.textContent = `$${total.toFixed(2)}`;
    }
    producto.addEventListener('change', calcularPresupuesto);
    plazo.addEventListener('input', calcularPresupuesto);
    extras.forEach(extra => extra.addEventListener('change', calcularPresupuesto));
    form.addEventListener('submit', function (event) {
        let nombre = document.getElementById("nombre").value.trim();
        let apellidos = document.getElementById("apellidos").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let email = document.getElementById("email").value.trim();
        let condiciones = document.getElementById("condiciones").checked;
        const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,15}$/;
        const apellidosRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,40}$/;
        const telefonoRegex = /^[0-9]{9}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!nombreRegex.test(nombre)) {
            alert("Nombre inválido. Solo letras, máximo 15 caracteres.");
            event.preventDefault();
            return;
        }
        if (!apellidos || apellidos.length > 40 || !apellidosRegex.test(apellidos)) {
            alert("Apellidos inválidos. Solo letras, máximo 40 caracteres.");
            event.preventDefault();
            return;
        }
        if (!telefonoRegex.test(telefono)) {
            alert("Teléfono inválido. Solo 9 dígitos.");
            event.preventDefault();
            return;
        }
        if (!email || !emailRegex.test(email)) {
            alert("Correo electrónico inválido.");
            event.preventDefault();
            return;
        }
        if (!condiciones) {
            alert("Debes aceptar las condiciones de privacidad.");
            event.preventDefault();
            return;
        }
        alert("Formulario enviado correctamente.");
    });
    extras.forEach(extra => {
        extra.addEventListener('change', calcularPresupuesto);
    });
    calcularPresupuesto();
});
