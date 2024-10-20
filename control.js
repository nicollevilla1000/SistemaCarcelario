// Obtener elementos del formulario y la tabla
const visitaForm = document.getElementById('visitaForm');
const visitanteInput = document.getElementById('visitante');
const reclusoInput = document.getElementById('recluso');
const fechaInput = document.getElementById('fecha');
const historialTableBody = document.querySelector('table tbody');

// Función para agregar una nueva visita al historial
function registrarVisita(event) {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

    // Obtener los valores de los campos del formulario
    const visitante = visitanteInput.value;
    const recluso = reclusoInput.value;
    const fecha = fechaInput.value;

    // Crear una nueva fila en la tabla del historial
    const nuevaFila = document.createElement('tr');

    // Crear las celdas de la nueva fila
    const celdaVisitante = document.createElement('td');
    const celdaRecluso = document.createElement('td');
    const celdaFecha = document.createElement('td');

    // Asignar los valores del formulario a las celdas
    celdaVisitante.textContent = visitante;
    celdaRecluso.textContent = recluso;
    celdaFecha.textContent = fecha;

    // Añadir las celdas a la nueva fila
    nuevaFila.appendChild(celdaVisitante);
    nuevaFila.appendChild(celdaRecluso);
    nuevaFila.appendChild(celdaFecha);

    // Añadir la nueva fila al cuerpo de la tabla del historial
    historialTableBody.appendChild(nuevaFila);

    // Limpiar los campos del formulario después de registrar la visita
    visitanteInput.value = '';
    reclusoInput.value = '';
    fechaInput.value = '';
}

// Escuchar el evento de envío del formulario
visitaForm.addEventListener('submit', registrarVisita);
