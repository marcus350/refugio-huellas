# Huellas — Refugio de Animales

> **Un hogar para quienes todavía están buscando el suyo.**

**Huellas** es una página web desarrollada como proyecto final para el curso de **Desarrollo Front-End JS de Talento Tech**.

El proyecto representa la página de un refugio ficticio dedicado al rescate, cuidado y adopción responsable de animales que se encuentran en situación de calle o necesitan un nuevo hogar.

El objetivo principal es crear una experiencia sencilla, accesible y amigable que permita conocer a los animales disponibles para adopción, informarse sobre el proceso y contactar al refugio.

---

## 📌 Índice

* [🐾 Sobre el proyecto](#-sobre-el-proyecto)
* [🎯 Objetivos](#-objetivos)
* [✨ Funcionalidades](#-funcionalidades)
* [🗓️ Bitácora de cambios](#️-bitácora-de-cambios)
* [🛠️ Tecnologías utilizadas](#️-tecnologías-utilizadas)
* [📂 Estructura del proyecto](#-estructura-del-proyecto)
* [🚀 Instalación y ejecución](#-instalación-y-ejecución)
* [💻 Uso de la página](#-uso-de-la-página)
* [📱 Diseño responsive](#-diseño-responsive)
* [🧩 Interactividad actual](#-interactividad-actual)
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

Desarrollar un sitio web multipágina para presentar un refugio de animales, sus mascotas disponibles y las formas de adopción y colaboración.

### Objetivos específicos

* Crear una interfaz clara y amigable.
* Aplicar HTML semántico para estructurar el contenido.
* Crear un diseño responsive adaptable a distintos dispositivos.
* Utilizar CSS para desarrollar la identidad visual del refugio.
* Facilitar la navegación entre las secciones del sitio.
* Presentar los perfiles de las mascotas con imágenes y descripciones.
* Explicar el proceso de adopción responsable y las formas de ayudar.
* Ofrecer un formulario de contacto conectado con Formspree.

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

El catálogo presenta doce perfiles con fotografía, nombre, descripción breve, edad y tamaño. Cada perfil incluye un enlace para consultar por esa mascota desde la página de contacto. Actualmente no hay búsqueda, filtros ni favoritos.

### 🐾 Guía de adopción y formas de ayudar

La guía de adopción describe seis pasos, recomendaciones para preparar el hogar y la información que el refugio necesita para conversar con las familias. La página «Ayudar» reúne opciones para adoptar, donar, hacer voluntariado o difundir perfiles.

La información de voluntariado incluye requisitos de inscripción (18 años o más, fotocopia del DNI y formulario completado al inscribirse), ejemplos de tareas y los turnos disponibles: lunes, miércoles y viernes, de 9:00 a 13:00 o de 15:00 a 19:00. La frecuencia de asistencia se coordina según disponibilidad y necesidades del refugio.

### ℹ️ Página «Nosotros»

Presenta la historia, misión y valores del refugio, acompañados por imágenes temáticas.

### 📱 Navegación adaptable

El menú permite acceder a las seis secciones principales. En pantallas pequeñas se despliega mediante el componente colapsable de Bootstrap.

### 📩 Formulario de contacto

La sección de contacto del sitio incluye un formulario pensado para que personas interesadas en adoptar, donar, colaborar o consultar puedan dejar un mensaje directamente al refugio.

#### ¿Cómo está configurado?

El formulario usa validaciones nativas del navegador (`required` y tipo de correo) y contiene los campos:

* Nombre completo.
* Correo electrónico.
* Asunto.
* Mensaje.

El envío se configura con Formspree mediante `action` y el método `POST`. No requiere un backend propio ni código JavaScript personalizado:

```html
<form action="https://formspree.io/f/mnpqovkp" method="post" id="formContacto">
```

Formspree procesa el envío si el endpoint está activo y correctamente configurado.

#### ¿Por qué es útil?

Este tipo de formulario es útil porque:

* ofrece un canal de consulta cuando el endpoint está habilitado;
* facilita el contacto para adopción, voluntariado y donaciones;
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

El sitio no incluye actualmente un formulario independiente de solicitud de adopción, modo oscuro ni persistencia de preferencias.

---

## 🗓️ Bitácora de cambios

Registro de las incorporaciones y modificaciones del proyecto, reconstruido a partir del historial de Git:

### 14 de septiembre de 2026 — Base del sitio

* Se creó la estructura multipágina con inicio y las secciones de mascotas, cómo adoptar, ayudar, nosotros y contacto.
* Se incorporaron la identidad visual inicial, la hoja de estilos, el logotipo y las primeras fotografías de animales.
* Se agregó la documentación inicial del proyecto.
* Se añadieron imágenes adicionales para los perfiles de mascotas disponibles.

### 19 de septiembre de 2026 — Navegación desplegable

* Se incorporó el menú colapsable de Bootstrap y se enlazaron las páginas del sitio.
* Se ajustaron los estilos de navegación para su uso en pantallas de distintos tamaños.

### 20 de septiembre de 2026 — Catálogo de mascotas

* Se completaron y ajustaron las tarjetas de perfiles de animales.
* Se agregaron fotografías para ampliar el catálogo a doce mascotas.
* Se mejoró el estilo de los botones y los enlaces de consulta.

### 23 de septiembre de 2026 — Contenido institucional y adopción

* Se desarrolló la página «Nosotros» con historia, misión, valores e imágenes.
* Se amplió «Cómo adoptar» con información del proceso, sus pasos y recomendaciones para las familias.
* Se actualizaron estilos y contenido de las páginas relacionadas.

### 29 de septiembre de 2026 — Ajustes del menú y contacto

* Se revisó el comportamiento del menú desplegable y su integración en las páginas.
* Se ajustó el formulario de contacto para enviar nombre, correo, asunto y mensaje mediante `POST` a Formspree, sin lógica JavaScript personalizada.
* Se actualizaron estilos y documentación para reflejar esos cambios.

### 8 de octubre de 2026 — Información de voluntariado

* Se agregó una sección con requisitos para inscribirse, tareas habituales y pautas de coordinación.
* Se publicaron los días de actividad (lunes, miércoles y viernes) y los turnos de mañana (9:00 a 13:00) y tarde (15:00 a 19:00).
* Se agregó un enlace desde la tarjeta de voluntariado para acceder a los requisitos y turnos.

---

## 🛠️ Tecnologías utilizadas

### Front-End

* **HTML5** — estructura y contenido.
* **CSS3** — estilos, diseño y responsive design.
* **Bootstrap 5.0.2** — estilos y menú de navegación colapsable.
* **Google Fonts (Heebo)** — tipografía del sitio.

### Herramientas

* **Git** — control de versiones.
* **GitHub** — almacenamiento y publicación del código.
* **Visual Studio Code** — editor de código.

### Tecnologías y conceptos utilizados

* HTML semántico.
* Formularios con validación nativa.
* Flexbox, CSS Grid y Media Queries.
* Bootstrap.
* Envío del formulario de contacto mediante Formspree.

---

## 📂 Estructura del proyecto

```text
refugio-huellas/
│
├── index.html
│
├── pages/
│   ├── mascotas.html
│   ├── como-adoptar.html
│   ├── ayudar.html
│   ├── nosotros.html
│   └── contacto.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── main.js
│
├── assets/
│   ├── huellas_logo.svg
│   └── fotografías e imágenes del sitio
│
└── README.md
```

`js/main.js` contiene código de prueba comentado y no se carga desde las páginas actuales. La navegación colapsable funciona con el bundle de Bootstrap incluido desde CDN.

---

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Ingresar a la carpeta

```bash
cd refugio-huellas
```

### 3. Abrir el proyecto

El proyecto no requiere instalación de paquetes ni proceso de compilación. Bootstrap y la tipografía se cargan desde CDN, por lo que se necesita conexión a Internet para esos recursos.

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

Un recorrido habitual por el sitio es:

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
  🐶 Ver perfiles
        │
        ↓
 📩 Consultar por contacto
        │
        ↓
 Envío a Formspree
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
* Componentes de Bootstrap.
* Media Queries y unidades relativas.
* Diseño adaptable a computadoras, tablets y celulares.

---

## 🧩 Interactividad actual

El menú colapsable utiliza el JavaScript incluido en Bootstrap. El formulario de contacto usa controles HTML y validaciones nativas del navegador; el envío se delega a Formspree. El catálogo y el resto del contenido son estáticos: no se generan desde JavaScript ni se guardan datos en `localStorage`.

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
* Uso de Bootstrap para la navegación adaptable.
* Organización de perfiles y secciones de contenido.
* Configuración de un formulario de contacto externo.
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
* 🔎 Búsqueda y filtros para el catálogo.
* ❤️ Favoritos y preferencias guardadas para cada visitante.

Estas funcionalidades requerirían tecnologías adicionales y un backend.

---

## ⚠️ Aclaración

**Huellas es un proyecto educativo y ficticio desarrollado para el curso de Desarrollo Front-End JS de Talento Tech.**

Los perfiles, historias, estadísticas y datos de contacto presentados en el sitio son demostrativos. El formulario está configurado para enviar los datos ingresados al endpoint de Formspree indicado en el HTML, si ese endpoint continúa activo; no se deben enviar datos personales reales mientras se utilice el proyecto como demostración.

El proyecto no representa actualmente a un refugio de animales real. Los enlaces para adoptar o donar son informativos y no procesan adopciones ni pagos.

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
