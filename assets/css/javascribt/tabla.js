// Obtener la tabla de comparación
const table = document.querySelector('.comparison-table table');

// Obtener todas las celdas de la tabla, excepto las del encabezado
const cells = table.querySelectorAll('tbody td');

// Recorrer todas las celdas y agregar un evento de click
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    // Remover la clase "highlight" de todas las celdas
    cells.forEach(c => c.classList.remove('highlight'));

    // Agregar la clase "highlight" a la celda clickeada
    cell.classList.add('highlight');
  });
});
