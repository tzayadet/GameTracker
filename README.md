<p align="center">
  <img src="https://img.shields.io/badge/GAME_DEV-GAME_LIBRARY_TRACKER-101010?style=for-the-badge&labelColor=050805&color=00FF41" alt="GameTracker"/>
  <img src="https://img.shields.io/badge/JAVA-REACT_TYPESCRIPT-101010?style=for-the-badge&logo=java&logoColor=00FF41" alt="Java and React"/>
</p>

# Game Library & Progress Tracker

[![Backend CI](https://github.com/tzayadet/GameTracker/actions/workflows/backend-ci.yml/badge.svg)](https://github.com/tzayadet/GameTracker/actions/workflows/backend-ci.yml) [![Frontend CI](https://github.com/tzayadet/GameTracker/actions/workflows/frontend-ci.yml/badge.svg)](https://github.com/tzayadet/GameTracker/actions/workflows/frontend-ci.yml) [![GitHub Pages](https://github.com/tzayadet/GameTracker/actions/workflows/static.yml/badge.svg)](https://github.com/tzayadet/GameTracker/actions/workflows/static.yml)

Aplicación de biblioteca personal y seguimiento del progreso en videojuegos. El repositorio contiene un frontend React/TypeScript, un backend Java 17 con Spring Boot y una infraestructura local PostgreSQL/Redis.

**Estado: prototipo en desarrollo.** El proyecto ya tiene una estructura Maven estándar, migración Flyway, componentes iniciales de búsqueda de juegos y una compilación automatizada del backend. Todavía no es una aplicación completa ni está preparada para producción.

## Componentes

- `frontend/`: cliente React 18, TypeScript, Vite y Zustand.
- `src/main/java/`: backend Spring Boot, controladores, servicios, entidades, repositorios y seguridad JWT.
- `src/main/resources/db/migration/`: migraciones SQL de Flyway.
- `src/main/resources/application.yml`: configuración de Spring mediante variables de entorno.
- `docker-compose.yml`: PostgreSQL y Redis para desarrollo local.
- `docs/index.html`: preview estático publicado en GitHub Pages; no equivale a la aplicación integrada.

**Preview:** https://tzayadet.github.io/GameTracker/

## Stack

- Java 17 y Spring Boot 3.2
- Spring Web, WebSocket, Security, Data JPA y Validation
- PostgreSQL 15, Redis 7 y Flyway
- JWT (JJWT)
- React 18, TypeScript, Vite y Zustand
- Tauri (configuración inicial)

## Requisitos

- JDK 17
- Maven 3.9+
- Node.js LTS y npm
- Docker Engine o Docker Desktop

## Backend local

1. Copia `.env.example` a `.env` y configura una clave JWT aleatoria de al menos 32 bytes. No subas el archivo `.env`.
2. Inicia la infraestructura:

```bash
docker compose up -d db redis
```

3. Exporta las variables de entorno de `.env` en tu terminal y ejecuta:

```bash
mvn spring-boot:run
```

La migración de Flyway se ejecuta al iniciar. El backend todavía no incorpora el flujo completo de registro/inicio de sesión ni la integración funcional con IGDB; por tanto, la API protegida no representa aún un producto utilizable de extremo a extremo.

Para verificar el proyecto:

```bash
mvn --batch-mode clean verify
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Build de producción:

```bash
npm run build
```

Durante el desarrollo, Vite utiliza el proxy configurado para API y WebSocket. Configura `VITE_API_URL` si el backend se ejecuta en otro origen.

## Seguridad y configuración

Variables principales:

- `DB_HOST`, `DB_USER`, `DB_PASS`
- `REDIS_HOST`
- `JWT_SECRET`
- `CORS_ALLOWED_ORIGINS`
- `IGDB_CLIENT`, `IGDB_SECRET`

CORS y WebSocket usan una lista explícita de orígenes permitidos. En producción debe configurarse con los dominios reales. Las credenciales incluidas en Docker Compose son exclusivamente locales y deben cambiarse antes de cualquier entorno compartido.

No expongas el prototipo a Internet ni introduzcas datos reales de usuarios. La autenticación, autorización, gestión de sesiones, rate limiting, protección WebSocket, auditoría y tratamiento de errores requieren pruebas de seguridad antes de producción.

## Trabajo pendiente

1. Implementar registro, autenticación y ciclo de vida de usuarios.
2. Completar la integración IGDB y su caché.
3. Añadir autorización por propietario para biblioteca y funciones sociales.
4. Completar matchmaking persistente y gestión de partidas.
5. Añadir tests unitarios e integración con PostgreSQL/Redis.
6. Verificar build y empaquetado de Tauri.
7. Documentar y validar despliegue integrado frontend/backend.

## CI

GitHub Actions ejecuta la verificación Maven del backend y la compilación/type-check del frontend cuando cambian sus respectivos componentes.

## Licencia

MIT. Consulta [LICENSE](LICENSE).
