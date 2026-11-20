
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


(() => {
    const form = document.getElementById('storyForm');
    const storiesContainer = document.getElementById('communityStories');
    const status = document.getElementById('storyFormStatus');
    const submitButton = form?.querySelector('[type="submit"]');
    const cancelEditButton = document.getElementById('cancelStoryEdit');

    if (!form || !storiesContainer || !status || !submitButton || !cancelEditButton) {
        return;
    }

    const storageKey = 'huellasCommunityStories';
    const dateField = form.elements.namedItem('adoptionDate');
    const fields = {
        author: form.elements.namedItem('author'),
        pet: form.elements.namedItem('pet'),
        adoptionDate: dateField,
        story: form.elements.namedItem('story')
    };
    let editingIndex = null;

    const getToday = () => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        return `${today.getFullYear()}-${month}-${day}`;
    };

    const updateDateLimit = () => {
        dateField.max = getToday();
    };

    const resetEditing = () => {
        editingIndex = null;
        form.reset();
        submitButton.textContent = 'Guardar mi historia';
        cancelEditButton.hidden = true;
        Object.values(fields).forEach((field) => field.setCustomValidity(''));
    };

    const showStatus = (message, isError = false) => {
        status.textContent = message;
        status.hidden = false;
        status.classList.toggle('error', isError);
    };

    const readStories = () => {
        const savedStories = window.localStorage.getItem(storageKey);

        if (savedStories === null) {
            return [];
        }

        const stories = JSON.parse(savedStories);
        const isValid = Array.isArray(stories) && stories.every((story) =>
            story &&
            typeof story.author === 'string' &&
            typeof story.pet === 'string' &&
            typeof story.adoptionDate === 'string' &&
            typeof story.story === 'string'
        );

        if (!isValid) {
            throw new Error('El formato de las historias guardadas no es válido.');
        }

        return stories;
    };

    const renderStories = (stories) => {
        storiesContainer.replaceChildren();

        if (stories.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.className = 'empty-stories';
            emptyMessage.textContent = 'Todavía no hay historias compartidas. ¡La tuya puede ser la primera!';
            storiesContainer.append(emptyMessage);
            return;
        }

        stories.forEach((story, index) => {
            const card = document.createElement('article');
            card.className = 'review-card';

            const pet = document.createElement('span');
            pet.className = 'review-pet';
            pet.textContent = `${story.pet} · adoptado/a el ${story.adoptionDate}`;

            const text = document.createElement('blockquote');
            text.textContent = story.story;

            const author = document.createElement('p');
            author.textContent = `— ${story.author}`;

            const actions = document.createElement('div');
            actions.className = 'story-actions';

            const editButton = document.createElement('button');
            editButton.type = 'button';
            editButton.dataset.action = 'edit';
            editButton.dataset.index = String(index);
            editButton.textContent = 'Editar';
            editButton.setAttribute('aria-label', `Editar la historia de ${story.pet}`);

            const deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.className = 'delete-story-button';
            deleteButton.dataset.action = 'delete';
            deleteButton.dataset.index = String(index);
            deleteButton.textContent = 'Borrar';
            deleteButton.setAttribute('aria-label', `Borrar la historia de ${story.pet}`);

            actions.append(editButton, deleteButton);
            card.append(pet, text, author, actions);
            storiesContainer.append(card);
        });
    };

    form.addEventListener('input', () => {
        Object.values(fields).forEach((field) => field.setCustomValidity(''));
    });

    form.addEventListener('focusin', updateDateLimit);

    storiesContainer.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-action]');

        if (!button) {
            return;
        }

        const index = Number(button.dataset.index);

        try {
            const stories = readStories();

            if (!Number.isInteger(index) || index < 0 || index >= stories.length) {
                throw new Error('No se encontró la historia seleccionada.');
            }

            if (button.dataset.action === 'edit') {
                editingIndex = index;
                Object.entries(fields).forEach(([key, field]) => {
                    field.value = stories[index][key];
                    field.setCustomValidity('');
                });
                submitButton.textContent = 'Guardar cambios';
                cancelEditButton.hidden = false;
                status.hidden = true;
                form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                fields.author.focus();
                return;
            }

            if (button.dataset.action === 'delete' && window.confirm('¿Querés borrar esta historia?')) {
                stories.splice(index, 1);
                window.localStorage.setItem(storageKey, JSON.stringify(stories));

                if (editingIndex === index) {
                    resetEditing();
                } else if (editingIndex !== null && index < editingIndex) {
                    editingIndex -= 1;
                }

                renderStories(stories);
                showStatus('La historia se borró correctamente.');
            }
        } catch (error) {
            console.error('Error al editar o borrar la historia:', error);
            showStatus('No se pudo completar la acción. Intentá nuevamente.', true);
        }
    });

    cancelEditButton.addEventListener('click', () => {
        resetEditing();
        status.hidden = true;
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        status.hidden = true;
        updateDateLimit();

        const story = Object.fromEntries(
            Object.entries(fields).map(([key, field]) => [key, field.value.trim()])
        );
        const emptyField = Object.entries(story).find(([, value]) => !value);

        if (emptyField) {
            const [key] = emptyField;
            fields[key].setCustomValidity('Este campo es obligatorio.');
            fields[key].reportValidity();
            showStatus('Completá todos los campos para guardar tu historia.', true);
            return;
        }

        if (story.adoptionDate > getToday()) {
            dateField.setCustomValidity('La fecha de adopción no puede ser futura.');
            dateField.reportValidity();
            showStatus('La fecha de adopción no puede ser posterior a hoy.', true);
            return;
        }

        try {
            const stories = readStories();
            if (editingIndex === null) {
                stories.unshift(story);
            } else if (editingIndex >= 0 && editingIndex < stories.length) {
                stories[editingIndex] = story;
            } else {
                throw new Error('No se encontró la historia que se está editando.');
            }

            window.localStorage.setItem(storageKey, JSON.stringify(stories));
            renderStories(stories);
            const wasEditing = editingIndex !== null;
            resetEditing();
            showStatus(wasEditing
                ? 'Los cambios de tu historia se guardaron correctamente.'
                : '¡Gracias por compartir tu historia! Quedó guardada en este dispositivo.');
        } catch (error) {
            console.error('Error al guardar o cargar las historias:', error);
            showStatus('No se pudo guardar la historia en este dispositivo. Intentá nuevamente.', true);
        }
    });

    try {
        updateDateLimit();
        renderStories(readStories());
    } catch (error) {
        console.error('Error al cargar las historias guardadas:', error);
        showStatus('No se pudieron cargar las historias guardadas en este dispositivo.', true);
    }
})();
