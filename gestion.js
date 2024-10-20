
const reclusoForm = document.getElementById('reclusoForm');
const reclusosTable = document.getElementById('reclusosTable').getElementsByTagName('tbody')[0];


let reclusos = [];


reclusoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nuevoRecluso = {
        nombre: document.getElementById('nombre').value,
        identificacion: document.getElementById('identificacion').value,
        delitos: document.getElementById('delitos').value,
        condena: document.getElementById('condena').value,
        fechaIngreso: document.getElementById('fechaIngreso').value
    };
    
    reclusos.push(nuevoRecluso);
    mostrarReclusos();
    reclusoForm.reset();
});


function mostrarReclusos() {
    reclusosTable.innerHTML = '';

    reclusos.forEach((recluso, index) => {
        const fila = reclusosTable.insertRow();

        const celdaNombre = fila.insertCell(0);
        celdaNombre.innerText = recluso.nombre;

        const celdaIdentificacion = fila.insertCell(1);
        celdaIdentificacion.innerText = recluso.identificacion;

        const celdaDelitos = fila.insertCell(2);
        celdaDelitos.innerText = recluso.delitos;

        const celdaCondena = fila.insertCell(3);
        celdaCondena.innerText = recluso.condena;

        const celdaFechaIngreso = fila.insertCell(4);
        celdaFechaIngreso.innerText = recluso.fechaIngreso;

        const celdaAcciones = fila.insertCell(5);
        const botonEditar = document.createElement('button');
        botonEditar.classList.add('edit');
        botonEditar.innerText = 'Editar';
        botonEditar.onclick = () => editarRecluso(index);

        const botonEliminar = document.createElement('button');
        botonEliminar.innerText = 'Eliminar';
        botonEliminar.onclick = () => eliminarRecluso(index);

        celdaAcciones.appendChild(botonEditar);
        celdaAcciones.appendChild(botonEliminar);
    });
}

function eliminarRecluso(index) {
    reclusos.splice(index, 1);
    mostrarReclusos();
}


function editarRecluso(index) {
    const recluso = reclusos[index];

    document.getElementById('nombre').value = recluso.nombre;
    document.getElementById('identificacion').value = recluso.identificacion;
    document.getElementById('delitos').value = recluso.delitos;
    document.getElementById('condena').value = recluso.condena;
    document.getElementById('fechaIngreso').value = recluso.fechaIngreso;

    reclusos.splice(index, 1);  
}
