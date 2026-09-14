# Huellas — Refugio de Animales

> **Un hogar para quienes todavía están buscando el suyo.**

**Huellas** es una página web desarrollada como proyecto final para el curso de **Desarrollo Front-End JS de Talento Tech**.

El proyecto representa la página de un refugio ficticio dedicado al rescate, cuidado y adopción responsable de animales que se encuentran en situación de calle o necesitan un nuevo hogar.

El objetivo principal es crear una experiencia sencilla, accesible y amigable que permita conocer a los animales disponibles para adopción, obtener información sobre ellos y simular una solicitud de adopción.

---

## 📌 Índice

* [🐾 Sobre el proyecto](#-sobre-el-proyecto)
* [🎯 Objetivos](#-objetivos)
* [✨ Funcionalidades](#-funcionalidades)
* [🛠️ Tecnologías utilizadas](#️-tecnologías-utilizadas)
* [📂 Estructura del proyecto](#-estructura-del-proyecto)
* [🚀 Instalación y ejecución](#-instalación-y-ejecución)
* [💻 Uso de la página](#-uso-de-la-página)
* [📱 Diseño responsive](#-diseño-responsive)
* [🧠 Conceptos de JavaScript aplicados](#-conceptos-de-javascript-aplicados)
* [🎨 Diseño e identidad](#-diseño-e-identidad)
* [📚 Aprendizajes](#-aprendizajes)
* [🔮 Mejoras futuras](#-mejoras-futuras)
* [⚠️ Aclaración](#️-aclaración)
* [👨‍💻 Autor](#-autor)

---

## 🐾 Sobre el proyecto

Huellas nace con la idea de representar digitalmente a un refugio de animales que trabaja para brindar una segunda oportunidad a perros, gatos y otros animales que necesitan un hogar.

La página busca transmitir tres valores principales:

* ❤️ **Amor:** cada animal merece recibir cariño y cuidado.
* 🏠 **Hogar:** buscamos que cada animal encuentre una familia responsable.
* 🤝 **Compromiso:** la adopción es una decisión responsable que debe ser tomada con conciencia.

El sitio está pensado para que cualquier persona pueda navegar fácilmente por las diferentes secciones y encontrar información sobre los animales disponibles.

---

## 🎯 Objetivos

### Objetivo general

Desarrollar una página web interactiva utilizando HTML, CSS y JavaScript, aplicando los conocimientos adquiridos durante el curso de Desarrollo Front-End JS de Talento Tech.

### Objetivos específicos

* Crear una interfaz clara y amigable.
* Aplicar HTML semántico para estructurar el contenido.
* Crear un diseño responsive adaptable a distintos dispositivos.
* Utilizar CSS para desarrollar la identidad visual del refugio.
* Implementar funcionalidades interactivas mediante JavaScript.
* Manipular elementos del DOM.
* Trabajar con arrays y objetos.
* Implementar filtros y búsquedas.
* Validar formularios.
* Utilizar `localStorage` para conservar información del usuario.
* Simular un proceso de solicitud de adopción.

---

## ✨ Funcionalidades

### 🏠 Página de inicio

La página principal presenta:

* Presentación del refugio.
* Mensaje principal.
* Acceso a los animales disponibles.
* Información sobre el trabajo realizado por el refugio.
* Estadísticas de impacto.
* Llamados a la acción para adoptar o ayudar.

### 🐶 Animales en adopción

Se muestra un catálogo de animales disponibles.

Cada animal cuenta con información como:

* Nombre.
* Especie.
* Edad.
* Sexo.
* Tamaño.
* Estado de vacunación.
* Estado de castración.
* Descripción.
* Fotografía.

### 🔎 Búsqueda y filtros

El usuario puede encontrar animales utilizando diferentes criterios:

* Nombre.
* Especie.
* Edad.
* Sexo.
* Tamaño.

Los resultados se actualizan dinámicamente utilizando JavaScript.

### ❤️ Favoritos

Los usuarios pueden marcar animales como favoritos para encontrarlos posteriormente.

La información se almacena utilizando `localStorage`, permitiendo conservar los favoritos aunque se recargue la página.

### 📋 Información detallada

Al seleccionar un animal, se puede acceder a una vista con información más completa sobre su historia y características.

### 📝 Solicitud de adopción

El usuario puede completar un formulario para simular una solicitud de adopción.

El formulario incluye validaciones para comprobar que la información ingresada sea correcta.

### 📩 Formulario de contacto

La sección de contacto del sitio incluye un formulario pensado para que personas interesadas en adoptar, donar, colaborar o consultar puedan dejar un mensaje directamente al refugio.

#### ¿Cómo está configurado?

El formulario se construyó con HTML semántico usando los campos:

* Nombre completo.
* Correo electrónico.
* Asunto.
* Mensaje.

Luego se conectó con Formspree mediante la propiedad `action` del formulario:

```html
<form action="https://formspree.io/f/mnpqovkp" method="post" id="formContacto">
```

Además, se utilizó JavaScript con `fetch` y `FormData` para enviar los datos de forma asíncrona y mostrar un mensaje de confirmación sin recargar la página:

```javascript
fetch(formContacto.action, {
    method: 'POST',
    body: new FormData(formContacto),
    headers: {
        'Accept': 'application/json'
    }
})
```

Esto permite que el formulario funcione como un canal de contacto simple sin necesidad de configurar un backend completo.

#### ¿Por qué es útil?

Este tipo de formulario es útil porque:

* permite recibir consultas reales del usuario;
* facilita el contacto para adopción, voluntariado y donaciones;
* mejora la experiencia de usuario al mostrar feedback inmediato;
* ayuda al refugio a organizar mensajes sin requerir un sistema complejo;
* mantiene la web profesional y funcional aunque siga siendo un proyecto front-end estático.

### 🆘 Formas de ayudar

El sitio presenta diferentes maneras de colaborar con el refugio:

* Adoptar.
* Donar alimento.
* Donar insumos.
* Realizar una donación económica.
* Ser voluntario.
* Compartir las publicaciones de los animales.

### 🌙 Modo oscuro

La página puede incluir un modo oscuro para mejorar la accesibilidad y permitir al usuario elegir entre diferentes apariencias.

La preferencia puede almacenarse utilizando `localStorage`.

---

## 🛠️ Tecnologías utilizadas

### Front-End

* **HTML5** — estructura y contenido.
* **CSS3** — estilos, diseño y responsive design.
* **JavaScript (ES6+)** — interactividad y lógica de la aplicación.

### Herramientas

* **Git** — control de versiones.
* **GitHub** — almacenamiento y publicación del código.
* **Visual Studio Code** — editor de código.

### Tecnologías y conceptos utilizados

* HTML semántico.
* Flexbox.
* CSS Grid.
* Media Queries.
* DOM.
* Eventos.
* Funciones.
* Arrays.
* Objetos.
* Métodos de arrays.
* Condicionales.
* Formularios.
* Validaciones.
* `localStorage`.

---

## 📂 Estructura del proyecto

```text
huellas-refugio/
│
├── index.html
│
├── pages/
│   ├── animales.html
│   ├── nosotros.html
│   ├── como-adoptar.html
│   ├── ayudar.html
│   └── contacto.html
│
├── css/
│   ├── styles.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── animales.js
│   ├── favoritos.js
│   ├── formulario.js
│   └── tema.js
│
├── img/
│   ├── logo/
│   ├── animales/
│   ├── refugio/
│   └── icons/
│
└── README.md
```

> La estructura puede modificarse a medida que avance el desarrollo del proyecto.

---

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Ingresar a la carpeta

```bash
cd huellas-refugio
```

### 3. Abrir el proyecto

El proyecto no requiere instalación de dependencias externas.

Puede abrirse directamente desde `index.html`.

También se recomienda utilizar **Visual Studio Code** junto con la extensión **Live Server** para ejecutar el proyecto durante el desarrollo.

### 4. Ejecutar

Con Live Server:

```text
Click derecho sobre index.html
→ Open with Live Server
```

---

## 💻 Uso de la página

El flujo principal del sitio es:

```text
             🏠 INICIO
                 │
        ┌────────┴────────┐
        ↓                 ↓
   🐾 ADOPTAR         ❤️ AYUDAR
        │                 │
        ↓                 ↓
  Ver animales       Formas de ayudar
        │
        ↓
   🔎 Filtrar
        │
        ↓
  🐶 Elegir animal
        │
        ↓
 📋 Ver información
        │
        ↓
 ❤️ Solicitar adopción
        │
        ↓
 📝 Completar formulario
        │
        ↓
    ✅ Confirmación
```

---

## 📱 Diseño responsive

El sitio está desarrollado siguiendo un enfoque responsive, buscando que pueda utilizarse correctamente desde:

* 💻 Computadoras.
* 💻 Notebooks.
* 📱 Celulares.
* 📱 Tablets.

Se utilizan herramientas como:

* Flexbox.
* CSS Grid.
* Media Queries.
* Unidades relativas.
* Diseño adaptable.

---

## 🧠 Conceptos de JavaScript aplicados

El proyecto busca aplicar los principales conceptos aprendidos durante el curso.

### Arrays y objetos

Los animales pueden almacenarse como objetos dentro de un array:

```javascript
const animales = [
    {
        nombre: "Luna",
        especie: "Perro",
        edad: 2,
        sexo: "Hembra",
        tamaño: "Mediano"
    },
    {
        nombre: "Milo",
        especie: "Gato",
        edad: 4,
        sexo: "Macho",
        tamaño: "Pequeño"
    }
];
```

### Manipulación del DOM

JavaScript se utiliza para generar y modificar dinámicamente diferentes elementos de la página.

### Eventos

Se utilizan eventos para responder a las acciones del usuario, por ejemplo:

* Clicks.
* Búsquedas.
* Cambios en filtros.
* Envío de formularios.
* Selección de favoritos.

### Métodos de arrays

Se utilizan métodos como:

* `filter()`
* `find()`
* `map()`
* `forEach()`
* `some()`

para trabajar con los datos de los animales.

### LocalStorage

Se utiliza `localStorage` para conservar información como:

* Animales favoritos.
* Preferencia de tema.
* Información necesaria para determinadas funcionalidades.

### Validación de formularios

Los formularios cuentan con validaciones realizadas mediante JavaScript para evitar el envío de información incorrecta o incompleta.

---

## 🎨 Diseño e identidad

La identidad visual de Huellas busca transmitir una sensación de:

* Calidez.
* Confianza.
* Cercanía.
* Esperanza.
* Amor por los animales.

La interfaz utiliza elementos visuales relacionados con el mundo animal, fotografías de mascotas y una estructura sencilla que facilita la navegación.

La identidad visual podrá evolucionar durante el desarrollo del proyecto.

---

## 📚 Aprendizajes

Este proyecto permite poner en práctica los conocimientos adquiridos durante el curso, especialmente:

* Estructuración de páginas con HTML.
* Diseño de interfaces utilizando CSS.
* Creación de sitios responsive.
* Manipulación del DOM.
* Programación con JavaScript.
* Manejo de eventos.
* Trabajo con arrays y objetos.
* Validación de formularios.
* Persistencia de datos con `localStorage`.
* Organización de un proyecto Front-End.
* Uso de Git y GitHub.
* Buenas prácticas de desarrollo web.

---

## 🔮 Mejoras futuras

Si el proyecto continuara desarrollándose, podrían incorporarse nuevas funcionalidades:

* 🔐 Sistema de usuarios.
* 🗄️ Base de datos real.
* 📩 Envío real de solicitudes de adopción.
* 📧 Notificaciones por correo electrónico.
* 💳 Sistema de donaciones real.
* 🗺️ Ubicación del refugio mediante mapas.
* 📸 Galería de animales.
* 🐾 Seguimiento del proceso de adopción.
* 📱 Aplicación móvil.
* 🔔 Notificaciones sobre nuevos animales disponibles.
* 🩺 Historial veterinario de cada animal.
* 👥 Panel administrativo para el refugio.

Estas funcionalidades requerirían tecnologías adicionales y un backend.

---

## ⚠️ Aclaración

**Huellas es un proyecto educativo y ficticio desarrollado para el curso de Desarrollo Front-End JS de Talento Tech.**

Los animales, historias, estadísticas, datos de contacto y demás información presentada en el sitio son utilizados únicamente con fines demostrativos.

El proyecto no representa actualmente a un refugio de animales real ni recibe solicitudes o donaciones reales.

---

## 👨‍💻 Autor

**Marcos Ariel Argüello**

Proyecto realizado para:

**Talento Tech — Desarrollo Front-End JS**

### Tecnologías

`HTML5` · `CSS3` · `JavaScript` · `Git` · `GitHub`

---

## ❤️ Gracias por visitar Huellas

> **Adoptar no es salvar a un animal.
> Es darle la oportunidad de salvarte a vos. 🐾**
