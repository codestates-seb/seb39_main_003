package com.web.MyPetForApp.member.service;

import com.web.MyPetForApp.member.entity.Member;
import com.web.MyPetForApp.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public Member create(Member member) {
    Optional<Member> optionalMember = memberRepository.findByEmail(member.getEmail());

    if(optionalMember.isPresent()) {
        throw new IllegalArgumentException("이미 존재하는 회원입니다.");
    } else {
//        member.updateRole(Member.MemberRole.ROLE_ADMIN);
        return memberRepository.save(member);
        }
    }

    public Member update(Member modifiedMember) {
        // 회원이 존재하는지 확인
        Member findMember = findVerifiedMember(modifiedMember.getMemberId());
        // 존재한다면 들어온 정보대로 수정
        findMember.updateMember(modifiedMember);
        return memberRepository.save(findMember);
    }

    public Member read(Long memberId) {
        return findVerifiedMember(memberId);
    }

    public void delete(Long memberId) {
        // 회원이 존재하는지 확인
        Member findMember = findVerifiedMember(memberId);
        // 존재한다면 해당 회원 정보 삭제
        memberRepository.deleteById(memberId);
    }

    public Member findVerifiedMember(Long memberId) {
        return memberRepository.findById(memberId).orElseThrow(
                () -> new IllegalArgumentException("회원이 존재하지 않습니다."));
    }
}