document.getElementById('personalForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío del formulario

    
    const nombre = document.getElementById('nombre').value;
    const rol = document.getElementById('rol').value;
    const permisos = document.getElementById('permisos').value;

   
    const table = document.getElementById('personalTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = nombre;
    newRow.insertCell(1).innerText = rol;
    newRow.insertCell(2).innerText = permisos;

   
    document.getElementById('personalForm').reset();
});
