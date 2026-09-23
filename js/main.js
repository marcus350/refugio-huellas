const menuButton = document.querySelector('.navbar-toggler');
const navigationMenu = document.querySelector('.navbar-collapse');

if (menuButton && navigationMenu) {
	menuButton.addEventListener('click', () => {
		const isOpen = navigationMenu.classList.toggle('is-open');
		navigationMenu.classList.toggle('show', isOpen);
		menuButton.setAttribute('aria-expanded', String(isOpen));
		navigationMenu.style.setProperty('max-height', isOpen ? '420px' : '0px');
		navigationMenu.style.setProperty('padding', isOpen ? '10px' : '0 10px');
		navigationMenu.style.setProperty('opacity', isOpen ? '1' : '0');
		navigationMenu.style.setProperty('visibility', isOpen ? 'visible' : 'hidden');
		navigationMenu.style.setProperty('transform', isOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.98)');
	});
}

const formContacto = document.getElementById('formContacto');
const mensajeExito = document.getElementById('mensajeExito');

formContacto.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();

    fetch(formContacto.action, {
        method: 'POST',
        body: new FormData(formContacto),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al enviar el formulario');
        }
        mensajeExito.textContent = `¡Gracias, ${nombre}! Tu mensaje fue enviado correctamente. En breve nos pondremos en contacto.`;
        mensajeExito.hidden = false;
        formContacto.reset();
    })
    .catch(error => {
        mensajeExito.textContent = 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo nuevamente.';
        mensajeExito.hidden = false;
        console.error(error);
    });
});