package com.homics.gateway.controller;

import com.homics.gateway.service.AuthenticationFacade;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    private static final String MONOLITH_URI = "/mono/articles";

    private AuthenticationFacade authenticationFacade;

    public HomeController(AuthenticationFacade authenticationFacade) {
        this.authenticationFacade = authenticationFacade;
    }

    @GetMapping("/login")
    public String login() {
        if (authenticationFacade.isAnonymous()) {
            return "/index.html";
        }

        return redirectMonolith();
    }

    @GetMapping("/")
    public String redirectMonolith() {
        return "redirect:" + MONOLITH_URI;
    }

}
