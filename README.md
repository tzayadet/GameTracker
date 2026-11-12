# GameTracker

Game-library and progress-tracking application under active development. The repository contains a React/TypeScript frontend, an initial Java/Spring Boot backend structure and local PostgreSQL/Redis infrastructure.

**Status: prototype / incomplete.** The repository is not currently a verified end-to-end application. The frontend, backend and deployment configuration are not yet integrated into a reproducible release.

**Static preview:** https://tzayadet.github.io/GameTracker/  
This preview is not a verified release of the integrated React and Spring Boot application. Do not treat it as a production service.

## Components

- `frontend/`: React 18, TypeScript, Vite and Zustand.
- `controller/`, `service/`, `domain/`, `repository/`, `dto/`: Java backend source areas in progress.
- `security/`: initial authentication and WebSocket security components.
- `db/`: initial database migration files.
- `docker-compose.yml`: local PostgreSQL and Redis services.
- `application.yml`: Spring configuration and environment-variable references.
- `index.html`: static preview entry point.

## Technology stack

- Java 17
- Spring Boot 3.2
- Spring Web, WebSocket, Security, Data JPA and WebFlux
- PostgreSQL 15
- Redis 7
- Flyway
- JWT
- React 18
- TypeScript
- Vite
- Zustand
- Tauri configuration

## Frontend development

Requirements: Node.js and npm.

```bash
cd frontend
npm install
npm run dev
```

To run the production frontend build:

```bash
npm run build
```

The frontend build has not been verified as part of an integrated application release.

## Local infrastructure

Docker Compose starts PostgreSQL and Redis bound to loopback:

```bash
docker compose up -d db redis
```

The Compose file contains development-only database credentials. Do not reuse them outside a local disposable environment. Change credentials before any shared deployment.

## Backend configuration

The current Spring configuration expects environment variables for database access, JWT signing and IGDB integration:

- `DB_HOST`
- `DB_USER`
- `DB_PASS`
- `JWT_SECRET`
- `IGDB_CLIENT`
- `IGDB_SECRET`
- `REDIS_HOST`

Do not commit real secrets or API credentials. The backend project structure and Maven descriptor still require completion before a reproducible backend build can be documented.

## Known work remaining

1. Complete the Maven project descriptor and standard Java source layout.
2. Resolve missing classes and align package declarations.
3. Align JPA entities with Flyway migrations.
4. Complete authentication, authorization and ownership checks.
5. Validate JWT configuration and WebSocket origin restrictions.
6. Implement and test IGDB integration.
7. Add automated tests and a reproducible CI build.
8. Integrate frontend and backend with a documented API contract.
9. Verify Docker deployment and production configuration.

## Security notes

This is a development prototype. Do not expose it to the public Internet or use real user data. Review authentication, authorization, CORS, WebSocket handling, secret management and dependency versions before deployment.

## License

See [LICENSE](LICENSE).
