package com.zyane.gt.dto;

import com.zyane.gt.domain.Game;

public record GameDto(String igdbId, String title, String coverUrl, Double avgRating) {
    public static GameDto from(Game game) {
        return new GameDto(game.getIgdbId(), game.getTitle(), game.getCoverUrl(), game.getAvgRating());
    }
}
