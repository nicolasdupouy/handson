package com.homics.monolith.service;

import com.homics.monolith.controller.dto.UserActivityDto;
import com.homics.monolith.model.ActivityType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;

@Service
public class UserActivityService {
    private RestTemplate restTemplate;

    public UserActivityService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public void addLogin(String userName) {
        UserActivityDto userActivityDto = new UserActivityDto(userName, ActivityType.LOGIN, Instant.now());
        post(userActivityDto);
    }

    public void addLogout(String userName) {
        UserActivityDto userActivityDto = new UserActivityDto(userName, ActivityType.LOGOUT, Instant.now());
        post(userActivityDto);
    }

    private void post(UserActivityDto userActivityDto) {
        restTemplate.postForEntity("http://localhost:9001/user/api/activity", userActivityDto, Void.class);
    }
}
