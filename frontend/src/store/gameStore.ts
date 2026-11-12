import { create } from 'zustand';
import { api } from '../api/client';

export type Game = {
  igdbId: string;
  title: string;
  avgRating?: number | null;
  coverUrl?: string | null;
};

type GamePage = {
  content: Game[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

interface Store {
  games: Game[];
  q: string;
  loading: boolean;
  error: string | null;
  totalElements: number;
  totalPages: number;
  setQ: (q: string) => void;
  loadGames: (q?: string, page?: number) => Promise<void>;
}

let latestRequest = 0;

export const useStore = create<Store>((set) => ({
  games: [],
  q: '',
  loading: false,
  error: null,
  totalElements: 0,
  totalPages: 0,

  setQ: (q) => set({ q, games: [], error: null, totalElements: 0, totalPages: 0 }),

  loadGames: async (q = '', page = 0) => {
    const requestId = ++latestRequest;
    set({ loading: true, error: null });

    try {
      const { data } = await api.get<GamePage>('/api/v1/games', {
        params: { q, page, size: 20 },
      });

      if (requestId !== latestRequest) return;
      set({
        games: Array.isArray(data.content) ? data.content : [],
        totalElements: data.totalElements ?? 0,
        totalPages: data.totalPages ?? 0,
        loading: false,
      });
    } catch (error) {
      if (requestId !== latestRequest) return;
      const message = error instanceof Error ? error.message : 'Unknown API error';
      set({
        games: [],
        loading: false,
        error: `No se pudo consultar el backend. ${message}`,
      });
    }
  },
}));
