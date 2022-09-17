package com.web.MyPetForApp.item.service;

import com.web.MyPetForApp.item.entity.Item;
import com.web.MyPetForApp.item.entity.ItemCategory;
import com.web.MyPetForApp.item.repository.ItemCategoryRepository;
import com.web.MyPetForApp.item.repository.ItemRepository;
import com.web.MyPetForApp.member.entity.Member;
import com.web.MyPetForApp.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
public class ItemService {
    private final MemberRepository memberRepository;
    private final ItemRepository itemRepository;
    private final ItemCategoryRepository itemCategoryRepository;

    public Item createItem(Item item, Long memberId, Long itemCategoryId){
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new IllegalArgumentException("회원이 존재하지 않습니다."));
        ItemCategory itemCategory = itemCategoryRepository.findById(itemCategoryId)
                .orElseThrow(() -> new IllegalArgumentException("상품 카테고리가 존재하지 않습니다."));
        item.setMember(member);
        item.setItemCategory(itemCategory);
        return itemRepository.save(item);
    }

    public Item findItem(Long itemId){
        Item findItem = itemRepository.findById(itemId)
                .orElseThrow(() -> new IllegalArgumentException("상품이 존재하지 않습니다."));
        return findItem;
    }

    public Page<Item> findItems(Long itemCategoryId, int page, int size, String sortBy){
        ItemCategory itemCategory = itemCategoryRepository.findById(itemCategoryId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 카테고리 항목입니다."));
        return itemRepository.findAllByItemCategory(itemCategory, PageRequest.of(page, size,
                Sort.by(sortBy).descending()));
    }

    public Item updateItem(Long itemId, Item item){
        Optional<Item> optionalItem = itemRepository.findById(itemId);
        Item findItem = optionalItem.orElseThrow(() -> new IllegalArgumentException("상품이 존재하지 않습니다."));
        // 수정할 값이 초기값이 아닌 채로 들어오면 수정
        Optional.ofNullable(item.getImage()).ifPresent(image -> findItem.setImage(image));
        Optional.ofNullable(item.getItemName()).ifPresent(itemName -> findItem.setItemName(itemName));
        Optional.ofNullable(item.getInfo()).ifPresent(info -> findItem.setInfo(info));
        if(item.getPrice() != 0) findItem.setPrice(item.getPrice());
        if(item.getStockCnt() != 0) findItem.setStockCnt(item.getStockCnt());

        return findItem;
    }
    public void deleteItem(Long itemId){
        itemRepository.findById(itemId).orElseThrow(() -> new IllegalArgumentException("상품이 존재하지 않습니다."));
        itemRepository.deleteById(itemId);
    }
}