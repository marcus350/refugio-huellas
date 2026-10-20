
(() => {
    const formContacto = document.getElementById('formContacto');
    const mensajeExito = document.getElementById('mensajeExito');
    const campoNombre = document.getElementById('nombre');

    if (!formContacto || !mensajeExito || !campoNombre) {
        return;
    }

    const botonEnviar = formContacto.querySelector(
        '[type="submit"]'
    );

    formContacto.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Evitar envíos duplicados.
        if (botonEnviar?.disabled) {
            return;
        }

        const nombre = campoNombre.value.trim();

        // Limpiar el mensaje anterior.
        mensajeExito.textContent = '';
        mensajeExito.hidden = true;

        if (botonEnviar) {
            botonEnviar.disabled = true;
        }

        try {
            const response = await fetch(formContacto.action, {
                method: 'POST',
                body: new FormData(formContacto),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(
                    `Error HTTP: ${response.status}`
                );
            }

            mensajeExito.textContent =
                `¡Gracias, ${nombre}! Tu mensaje fue enviado correctamente. ` +
                'En breve nos pondremos en contacto.';

            formContacto.reset();

        } catch (error) {
            mensajeExito.textContent =
                'Ocurrió un error al enviar el mensaje. ' +
                'Por favor, inténtalo nuevamente.';

            console.error('Error al enviar el formulario:', error);

        } finally {
            mensajeExito.hidden = false;

            if (botonEnviar) {
                botonEnviar.disabled = false;
            }
        }
    });
})();
