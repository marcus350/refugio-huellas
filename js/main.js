// const formContacto = document.getElementById('formContacto');
// const mensajeExito = document.getElementById('mensajeExito');

// formContacto.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const nombre = document.getElementById('nombre').value.trim();

//     fetch(formContacto.action, {
//         method: 'POST',
//         body: new FormData(formContacto),
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Error al enviar el formulario');
//         }
//         mensajeExito.textContent = `¡Gracias, ${nombre}! Tu mensaje fue enviado correctamente. En breve nos pondremos en contacto.`;
//         mensajeExito.hidden = false;
//         formContacto.reset();
//     })
//     .catch(error => {
//         mensajeExito.textContent = 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo nuevamente.';
//         mensajeExito.hidden = false;
//         console.error(error);
//     });
// });