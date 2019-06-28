package com.homics.monolith.task;

import com.homics.monolith.service.StatsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class StatsTask {
    private static final Logger LOGGER = LoggerFactory.getLogger(StatsTask.class);
    private StatsService statsService;

    public StatsTask(StatsService statsService) {
        this.statsService = statsService;
    }

    @Scheduled(fixedRate = 10000)
    private void sendStats() {
        LOGGER.info("Sending the stats");
        statsService.sendStats();
    }
}
