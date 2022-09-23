package com.web.MyPetForApp.wish.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class WishDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post{
        private Long itemId;
        private Long memberId;
    }
    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response{
        private int wishCnt;
        private boolean isWished;
    }
}