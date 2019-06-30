package com.homics.monolith.service;

import com.homics.messaging.config.KafkaTopicConfig;
import com.homics.messaging.model.ImpactStockMessage;
import com.homics.monolith.model.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;


@Service
public class StockService {

    private final Logger logger = LoggerFactory.getLogger(StockService.class);
    private KafkaTemplate<String, ImpactStockMessage> kafkaTemplate;

    public StockService(KafkaTemplate<String, ImpactStockMessage> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    void impactStock(Order order) {
        logger.info("Send order: " + order);
        Message<ImpactStockMessage> message = MessageBuilder
                .withPayload(order.buildImpactStockMessage())
                .setHeader(KafkaHeaders.TOPIC, KafkaTopicConfig.TOPIC_IMPACT_STOCK)
                .build();
        this.kafkaTemplate.send(message);
    }
}
