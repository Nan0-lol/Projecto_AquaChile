document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioPostulacion');

    formulario.addEventListener('submit', (e) => {
        // Evita que la página se recargue al enviar
        e.preventDefault(); 

        // Obtener el input del archivo
        const cvInput = document.getElementById('cv');
        const archivo = cvInput.files[0];

        // Validar el peso del archivo (Máximo 5MB = 5 * 1024 * 1024 bytes)
        const tamañoMaximo = 5 * 1024 * 1024;
        
        if (archivo && archivo.size > tamañoMaximo) {
            alert('El archivo es demasiado grande. El tamaño máximo permitido es de 5MB.');
            return; // Detiene el envío si no pasa la validación
        }

        // Recopilar los datos automáticamente usando FormData
        const datosFormulario = new FormData(formulario);

        // Simulación del envío mostrando los datos en consola
        console.log('--- Datos de la Postulación ---');
        for (let [clave, valor] of datosFormulario.entries()) {
            // Si el valor es un archivo, muestra su nombre; si no, muestra el texto
            console.log(`${clave}: ${valor instanceof File ? valor.name : valor}`);
        }

        // Feedback para el usuario y limpieza
        alert('¡Postulación enviada correctamente!');
        formulario.reset();
    });
});