# Mi Postulación - Frontend Challenge

Este proyecto fue inicializado con [Vite](https://vitejs.dev/) y está configurado con las últimas herramientas del ecosistema de React para garantizar un desarrollo rápido y un rendimiento óptimo en producción.

## 🛠️ Stack Tecnológico

* **Librería UI:** React (con React Compiler habilitado para optimización automática)
* **Lenguaje:** TypeScript 
* **Estilos:** Tailwind CSS v4
* **Entorno / Build:** Vite + SWC

---

## 📘 Por qué elegimos TypeScript

Este proyecto está construido estrictamente con **TypeScript** en lugar de JavaScript puro por las siguientes ventajas clave:

* **Prevención de errores:** Detecta bugs en tiempo de desarrollo (antes de compilar o llegar al navegador), evitando los clásicos errores de "undefined is not an object".
* **Experiencia de Desarrollo (DX):** Mejora drásticamente el autocompletado en el editor (IntelliSense). Al tipear, Visual Studio Code sabe exactamente qué propiedades necesita cada componente.
* **Código auto-documentado:** Al definir `Interfaces` y `Types` para los *props* y las respuestas de las APIs, el código es mucho más fácil de leer y mantener para cualquier otro desarrollador que revise la prueba.

---

## 📂 Estructura del Proyecto

El código fuente se organiza siguiendo principios de separación de responsabilidades:

* `📁 src/components/` ➜ Componentes generales y de UI atómicos y modulares (Button, Input, Card).
* `📁 src/hooks/` ➜ Custom Hooks para encapsular la lógica de estado y llamadas a la API.
* `📁 src/services/` ➜ Capa de abstracción de red (fetchAPI y peticiones específicas).
* `📁 src/pages/` ➜ Vistas principales que orquestan la lógica de los hooks y componentes.
* `📁 src/types/` ➜ Definiciones de interfaces de TypeScript para contratos de API.



## 💻 Instalación y Uso Local

Para correr este proyecto en tu computadora local, seguí estos pasos:

1. Cloná este repositorio.
2. Abrí la terminal en la carpeta del proyecto e instalá las dependencias:
   ```bash
   npm install