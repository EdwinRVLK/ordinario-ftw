// Función para validar el formulario de inicio de sesión
function validateForm() {
    // Obtenemos los valores de los campos
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Verificamos si los campos no están vacíos
    if (email == "" || password == "") {
        alert("Por favor, complete todos los campos.");
        return false;  // Impide el envío del formulario si los campos están vacíos
    }

    // Simulamos el login exitoso si los campos son válidos
    // Aquí podrías agregar validación adicional si es necesario (ejemplo: verificar si el correo tiene formato correcto)

    // Redirigir al index.html
    window.location.href = "index.html";  // Cambia esto a la URL de tu página principal

    return false;  // Prevenir que el formulario se envíe y recargue la página
}
