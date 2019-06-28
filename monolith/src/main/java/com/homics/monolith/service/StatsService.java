package com.homics.monolith.service;

import com.homics.messaging.config.KafkaTopicConfig;
import com.homics.messaging.model.OrderPayedMessage;
import com.homics.monolith.model.Order;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

import static com.homics.messaging.config.KafkaTopicConfig.TOPIC_STATS;

@Service
public class StatsService {
    private KafkaTemplate<String, OrderPayedMessage> kafkaTemplate;

    public StatsService( KafkaTemplate<String, OrderPayedMessage> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    // NOTE : In the previous exercise, the stats flow was :
    //  - Save the stats operation in the database
    //  - A scheduled task runs and fetches unsent stats from the repository
    //  - Send them to the microservice and remove the data from the table if success.
    //
    // Starting from this exercise, we send the stats directly via Kafka.

    void sendStat(Order order) {
        // TODO 4.1.1: Send a OrderPayedMessage to the stats microservice via kafka.
        //  Use the MessageBuilder from springkafka to generate this message.
        //  Set the topic to 'TOPIC_STATS' from the common-messaging lib.
        //  Then send it with the kafkaTemplate.
        Message<OrderPayedMessage> message = MessageBuilder
                .withPayload(order.buildOrderPayedMessage())
                .setHeader(KafkaHeaders.TOPIC, KafkaTopicConfig.TOPIC_STATS)
                .build();
        this.kafkaTemplate.send(message);
    }
}
