package com.daggerok.error;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static java.util.Objects.nonNull;

/**
 * Created by mak on 5/13/16.
 */
@Slf4j
@Controller
public class GlobalErrorHandler implements ErrorController {

    @Value("${server.context-path:}")
    String contextPath;

    @SneakyThrows
    @GetMapping("/error")
    public void handle(HttpServletRequest request, HttpServletResponse response, Exception error) {

        if (nonNull(error) && nonNull(error.getMessage())) {
            log.error(request.getRequestURI(), error);
        }

        response.sendRedirect(contextPath.concat("/"));
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}
