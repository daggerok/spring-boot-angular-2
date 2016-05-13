package com.daggerok;

import com.daggerok.data.User;
import com.daggerok.data.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.RandomStringUtils;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.IntStream;

@Slf4j
@SpringBootApplication
public class WebApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(UserRepository userRepository) {

        if (userRepository.count() < 1) {

            IntStream.range(6, 7)
                    .mapToObj(RandomStringUtils::randomAlphanumeric)
                    .map(User::of)
                    .forEach(userRepository::save);
        }

        return args -> log.info("\n\n{}\n", userRepository.findAll());
    }
}

