package com.zyane.gt.controller;

import com.zyane.gt.dto.GameDto;
import com.zyane.gt.dto.PageResponse;
import com.zyane.gt.service.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/games")
@RequiredArgsConstructor
public class GameController {
    private final GameService service;

    @GetMapping
    public ResponseEntity<PageResponse<GameDto>> search(
            @RequestParam(defaultValue = "") String q,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        if (page < 0 || size < 1 || size > 100) {
            throw new IllegalArgumentException("page must be >= 0 and size must be between 1 and 100");
        }
        var result = service.search(q, PageRequest.of(page, size));
        return ResponseEntity.ok(PageResponse.from(result, GameDto::from));
    }
}
