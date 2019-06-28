package com.homics.monolith.model;

import com.homics.monolith.controller.dto.OrderPayMessageDto;

import javax.persistence.*;

@Entity
public class OrderPayMessage {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Order order;

    public OrderPayMessage() {
    }

    public OrderPayMessage(Order order) {
        this.order = order;
    }

    public OrderPayMessageDto extractMessageDto() {
        return order.extractMessageDto();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
