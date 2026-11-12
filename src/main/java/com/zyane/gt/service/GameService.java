package com.zyane.gt.service;

import com.zyane.gt.domain.Game;
import com.zyane.gt.repository.GameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class GameService {
    private final GameRepository games;

    public Page<Game> search(String query, Pageable pageable) {
        String normalized = query == null ? "" : query.trim();
        if (normalized.isEmpty()) {
            return games.findAll(pageable);
        }
        return games.findByTitleContainingIgnoreCase(normalized, pageable);
    }
}
