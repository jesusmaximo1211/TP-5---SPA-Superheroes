# Superheroes SPA - NoSQL Practice

Una Single Page Application (SPA) temática de cómics diseñada para gestionar una base de datos de superhéroes de Marvel y DC. Este proyecto fue desarrollado como parte de la **Práctica #6 de la materia Bases de Datos NoSQL**.

![Comic Aesthetic](https://via.placeholder.com/800x200?text=SUPERHEROES+SPA+COMIC+DESIGN)

## 🚀 Características

- **Estética de Cómic:** Interfaz vibrante con fuentes tipo "Bangers", tramas de puntos (halftone), bordes gruesos y efectos de "POW!" y "ZAP!".
- **Gestión Completa (CRUD):** Permite crear, visualizar, editar y eliminar superhéroes y villanos.
- **Vista de Detalle:** Cada personaje cuenta con una ficha técnica que incluye:
  - Carrusel de imágenes.
  - Logos dinámicos de la editorial (Marvel/DC).
  - Biografía completa, año de aparición y equipamiento.
- **Filtrado Inteligente:**
  - Navegación por rutas SPA (`#/`, `#/marvel`, `#/dc`).
  - Buscador en tiempo real por nombre o identidad secreta.
- **Notificaciones:** Sistema de "Toasts" para confirmar el éxito o fracaso de las operaciones.
- **Carga Automática:** El proyecto incluye un script de inicialización (`mongo-init.js`) que carga automáticamente 40 personajes icónicos la primera vez que se levanta la base de datos.

## 🛠️ Tecnologías

- **Frontend:** HTML5, JavaScript (Vanilla), Tailwind CSS, Google Fonts.
- **Backend:** Node.js, Express.js.
- **Base de Datos:** MongoDB.
- **Infraestructura:** Docker & Docker Compose ("Recetas").

## 📦 Instalación y Ejecución

Asegúrate de tener instalado [Docker Desktop](https://www.docker.com/products/docker-desktop).

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd "TP 5 - SPA Superheroes"
   ```

2. **Levantar los contenedores:**
   ```bash
   docker-compose up -d --build
   ```
   Esto levantará tres servicios:
   - `heroes-db`: Base de datos MongoDB (puerto 27017).
   - `heroes-back`: Servidor API Node.js (puerto 3000).
   - `heroes-front`: Servidor web Nginx (puerto 8080).

3. **Acceder a la aplicación:**
   Abre tu navegador en `http://localhost:8080`.

> [!NOTE]
> La base de datos se poblará automáticamente con 40 héroes gracias al archivo `mongo-init.js` montado en el contenedor de MongoDB. No es necesario ejecutar comandos adicionales.

## 🛣️ Rutas de la API (Backend)

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/heroes` | Obtener todos los personajes. |
| `GET` | `/api/heroes/:id` | Obtener detalle de un personaje. |
| `POST` | `/api/heroes` | Crear un nuevo personaje. |
| `PUT` | `/api/heroes/:id` | Actualizar un personaje existente. |
| `DELETE` | `/api/heroes/:id` | Eliminar un personaje. |

## 🎓 Requerimientos Cumplidos

El proyecto cumple con los 13 puntos solicitados:
1. Frameworks libres para FE/BE.
2. Persistencia en MongoDB con Docker.
3. Uso de recetas (Docker Compose).
4. Cards con información resumida y bio truncada.
5. Vista de detalle completa.
6. Carrusel de imágenes en el detalle.
7. Campos: nombre, real, año, casa, bio, equipo, imágenes.
8. Logos de editorial en detalle.
9. Operaciones CRUD completas.
10. Mensajes de éxito/error.
11. Rutas SPA (`/`, `/marvel`, `/dc`).
12. Filtro por nombre en el cliente.
13. Carga inicial de 40 personajes.

---
**Desarrollado por:** Jesús Serra
**Materia:** Bases de Datos NoSQL
