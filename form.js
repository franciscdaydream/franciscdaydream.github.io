// Agradecimiento
const modal = document.getElementById('modal');
const nombreModal = document.getElementById('nombreModal');
const cerrarModal = document.getElementById('cerrarModal');

cerrarModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Envío del formulario
document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
 
  // Agradecimiento con nombre
  nombreModal.textContent = nombre;
  modal.classList.remove('hidden');

  // Resetear 
  this.reset();

});