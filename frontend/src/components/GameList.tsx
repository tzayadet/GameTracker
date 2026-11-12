import { useEffect, useState } from 'react';
import { useStore } from '../store/gameStore';

export const GameList = () => {
  const {
    games,
    q,
    loading,
    error,
    totalElements,
    totalPages,
    loadGames,
    setQ,
  } = useStore();
  const [page, setPage] = useState(0);

  useEffect(() => {
    void loadGames(q, page);
  }, [q, page, loadGames]);

  const updateQuery = (value: string) => {
    setQ(value);
    setPage(0);
  };

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <span className="eyebrow">PERSONAL GAME LIBRARY</span>
          <h1>GameTracker</h1>
          <p className="subtitle">Tu biblioteca de juegos, búsqueda y seguimiento en un solo lugar.</p>
        </div>
        <span className="status-chip">PROTOTYPE · API REQUIRED</span>
      </header>

      <section aria-label="Game search">
        <div className="search-panel">
          <input
            className="search-input"
            type="search"
            value={q}
            onChange={(event) => updateQuery(event.target.value)}
            placeholder="Buscar un juego por título..."
            aria-label="Buscar juegos"
          />
        </div>

        <p className="result-meta" aria-live="polite">
          {loading ? 'Consultando biblioteca…' : `${totalElements} resultados`}
        </p>

        {error ? (
          <div className="state-panel error" role="alert">
            {error}
            <p>Comprueba que el backend Spring Boot está iniciado y que responde en /api/v1/games.</p>
          </div>
        ) : loading ? (
          <div className="state-panel" role="status">Sincronizando biblioteca…</div>
        ) : games.length === 0 ? (
          <div className="state-panel">
            No hay juegos para mostrar. Cuando el backend esté conectado, los resultados aparecerán aquí.
          </div>
        ) : (
          <ul className="game-grid" aria-label="Resultados de juegos">
            {games.map((game) => (
              <li className="game-card" key={game.igdbId}>
                <div className="game-cover" aria-hidden="true">
                  {game.coverUrl ? (
                    <img
                      src={game.coverUrl.startsWith('//') ? `https:${game.coverUrl}` : game.coverUrl}
                      alt=""
                      loading="lazy"
                    />
                  ) : '◈'}
                </div>
                <div>
                  <h2 className="game-title">{game.title}</h2>
                  <span className="game-rating">
                    {typeof game.avgRating === 'number'
                      ? `★ ${game.avgRating.toFixed(1)} / 100`
                      : 'Rating no disponible'}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}

        <nav className="pagination" aria-label="Paginación">
          <button
            className="page-button"
            type="button"
            disabled={page <= 0 || loading}
            onClick={() => setPage((current) => Math.max(0, current - 1))}
          >
            Anterior
          </button>
          <span>{totalPages > 0 ? `Página ${page + 1} de ${totalPages}` : 'Página 1'}</span>
          <button
            className="page-button"
            type="button"
            disabled={loading || totalPages === 0 || page + 1 >= totalPages}
            onClick={() => setPage((current) => current + 1)}
          >
            Siguiente
          </button>
        </nav>
      </section>

      <footer className="app-footer">
        GameTracker · React + TypeScript · La API y la integración IGDB siguen en desarrollo.
      </footer>
    </main>
  );
};
