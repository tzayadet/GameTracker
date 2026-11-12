# GameTracker

Prototipo de catálogo y seguimiento de videojuegos. El repositorio contiene una interfaz React/TypeScript en desarrollo y un backend Java/Spring Boot incompleto.

## Estado del proyecto

**En desarrollo. No es una aplicación desplegable de extremo a extremo todavía.**

La estructura actual incluye un frontend React/Vite, una configuración inicial de Tauri, clases Java de dominio, una API de consulta de juegos y configuración prevista para PostgreSQL, Redis y Flyway. Faltan componentes referenciados por el código y la estructura Java aún no está organizada como un proyecto Maven estándar. Por tanto, no se garantiza que `mvn package` o el despliegue con Docker funcionen en este estado.

## Stack previsto

- Java 17 y Spring Boot
- Spring Security y JWT
- PostgreSQL y Flyway
- Redis para matchmaking
- React 18, TypeScript, Vite y Zustand
- Tauri para escritorio

## Estructura presente

- `frontend/`: cliente React/TypeScript y configuración Tauri.
- `security/`, `controller/`, `service/`, `domain/`: fuentes Java en fase de organización.
- `db/migration/`: migración SQL inicial.
- `application.yml`: configuración del backend.
- `docker-compose.yml`: infraestructura local de desarrollo.

## Próximos hitos técnicos

1. Reubicar las fuentes Java bajo `src/main/java` y completar clases DTO, servicios y repositorios ausentes.
2. Alinear entidades JPA con la migración Flyway.
3. Completar autenticación, registro y gestión de usuarios.
4. Asegurar autorización por propietario en biblioteca, clanes y matchmaking.
5. Corregir configuración JWT y orígenes permitidos para WebSocket.
6. Añadir tests unitarios, integración y build reproducible.
7. Implementar y probar sincronización IGDB mediante credenciales externas.

## Configuración

No hay un procedimiento de despliegue validado. No publiques secretos ni credenciales de IGDB en el repositorio. Utiliza variables de entorno y secretos del entorno de despliegue.

## Seguridad

El filtro JWT y el interceptor STOMP son código inicial y requieren revisión antes de cualquier despliegue. El proyecto no debe contener datos reales de usuarios ni exponerse a Internet como servicio operativo.

## Licencia

Consulta [LICENSE](LICENSE).
