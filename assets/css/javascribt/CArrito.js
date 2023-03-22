const cartButton = document.querySelector('.cart-button');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');

cartButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    popup.style.display = 'none';
  }
});
const miBoton = document.getElementById('miBoton');
const miVentanaEmergente = document.getElementById('miVentanaEmergente');

miBoton.addEventListener('click', function() {
  miVentanaEmergente.style.display = 'block';
});

