package com.web.MyPetForApp.pay.service;

import com.web.MyPetForApp.exception.BusinessLogicException;
import com.web.MyPetForApp.exception.ExceptionCode;
import com.web.MyPetForApp.member.entity.Member;
import com.web.MyPetForApp.member.repository.MemberRepository;
import com.web.MyPetForApp.member.service.MemberService;
import com.web.MyPetForApp.order.entity.Order;
import com.web.MyPetForApp.order.entity.OrderItem;
import com.web.MyPetForApp.order.repository.OrderItemRepository;
import com.web.MyPetForApp.order.repository.OrderRepository;
import com.web.MyPetForApp.pay.entity.Pay;
import com.web.MyPetForApp.pay.repository.PayRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class PayService {
    private final PayRepository payRepository;
    private final MemberService memberService;
    private final OrderRepository orderRepository;

    public Pay create(Pay pay,String memberId, Long orderId) {
        Order findOrder = orderRepository.findById(orderId).orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND)
        );
        Member findMember = memberService.findVerifiedMember(memberId);
        pay.addOrder(findOrder);
        pay.changeMember(findMember);
        // 결제 성공되었다 가정 -> 바로 결제 완료로 상태 바꿈
        pay.updatePayStatus(Pay.PayStatus.PAY_COMPLETE);
        // 주문 상태도 주문 완료로 바꾼다.
        findOrder.updateOrderStatus(Order.OrderStatus.ORDER_COMPLETE);

        return payRepository.save(pay);
    }

    public Pay read(Long payId) {
        return findVerifiedPay(payId);
    }

    public void delete(Long payId) {
        payRepository.deleteById(payId);
    }

    private Pay findVerifiedPay(Long payId) {
        return payRepository.findById(payId).orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.PAY_NOT_FOUND)
        );
    }
}
