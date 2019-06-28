package com.homics.gateway.config.filter;

import com.homics.gateway.service.AuthenticationFacade;
import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import org.springframework.cloud.netflix.zuul.filters.support.FilterConstants;
import org.springframework.stereotype.Component;

@Component
public class AddUserFilter extends ZuulFilter {

    private static final String USER_HEADER_NAME = "user";
    private AuthenticationFacade authenticationFacade;

    public AddUserFilter(AuthenticationFacade authenticationFacade) {
        this.authenticationFacade = authenticationFacade;
    }

    @Override
    public Object run() {
        addZuulRequestHeader();
        return null;
    }

    private void addZuulRequestHeader() {
        RequestContext context = RequestContext.getCurrentContext();
        context.put(USER_HEADER_NAME, authenticationFacade.getLoggedUserName());
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    @Override
    public String filterType() {
        return FilterConstants.PRE_TYPE;
    }

    @Override
    public int filterOrder() {
        return 1;
    }
}