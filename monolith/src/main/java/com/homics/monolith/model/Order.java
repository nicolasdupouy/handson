package com.homics.monolith.model;

import com.homics.messaging.model.ArticleStockDto;
import com.homics.messaging.model.ImpactStockMessage;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Entity
@Table(name = "order_table")
public class Order {

    @Id
    @GeneratedValue
    private Long id;

    @OneToMany
    private List<OrderLine> orderLines = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    private Double totalPrice;

    private String user;

    public String getUser() {
        return user;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<OrderLine> getOrderLines() {
        return orderLines;
    }

    public void setOrderLines(List<OrderLine> orderLines) {
        this.orderLines = orderLines;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Order order = (Order) o;
        return Objects.equals(id, order.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public ImpactStockMessage buildImpactStockMessage() {
        List<ArticleStockDto> articleStockDtos = getOrderLines().stream()
                .map(orderLine ->
                        new ArticleStockDto(
                                orderLine.getArticle().getId(),
                                -orderLine.getQuantity().longValue()
                        ))
                .collect(Collectors.toList());
        return new ImpactStockMessage(id, articleStockDtos);
    }
}
