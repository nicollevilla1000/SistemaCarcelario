// reporte.js

// Evento para manejar el formulario
document.getElementById('reporteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fecha = document.getElementById('fecha').value;
    const visitas = document.getElementById('visitas').value;
    const eventos = document.getElementById('eventos').value;
    const actividades = document.getElementById('actividades').value;

    // Agregar a la tabla
    const tableBody = document.querySelector('#reporteTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${fecha}</td><td>${visitas}</td><td>${eventos}</td><td>${actividades}</td>`;
    tableBody.appendChild(newRow);

    // Actualizar gráfico
    addData(visitasChart, fecha, visitas);
});

// Configuración para el gráfico de visitas diarias
const ctx = document.getElementById('visitasChart').getContext('2d');
const visitasChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [], // Fechas de los reportes
        datasets: [{
            label: 'Visitas Diarias',
            data: [], // Número de visitas
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Función para añadir datos al gráfico
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
