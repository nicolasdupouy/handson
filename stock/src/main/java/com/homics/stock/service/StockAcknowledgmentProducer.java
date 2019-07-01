package com.homics.stock.service;


import com.homics.messaging.config.KafkaTopicConfig;
import com.homics.messaging.model.ImpactStockMessage;
import com.homics.messaging.model.StockAcknowledgmentMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

@Service
public class StockAcknowledgmentProducer {

    private final Logger logger = LoggerFactory.getLogger(StockService.class);
    private KafkaTemplate<String, ImpactStockMessage> kafkaTemplate;

    public StockAcknowledgmentProducer(KafkaTemplate<String, ImpactStockMessage> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    void notifyStockChanges(Long operationId, boolean success) {
        logger.info(String.format("#### -> Sending StockAcknowledgmentMessage success: %s", success));
        Message<StockAcknowledgmentMessage> message = MessageBuilder
                .withPayload(buildStockAcknowledgmentMessage(operationId, success))
                .setHeader(KafkaHeaders.TOPIC, KafkaTopicConfig.TOPIC_ACKNOWLEDGE_STOCK)
                .build();
        this.kafkaTemplate.send(message);
    }

    private StockAcknowledgmentMessage buildStockAcknowledgmentMessage(Long operationId, boolean success) {
        return new StockAcknowledgmentMessage(operationId, success);
    }
}
