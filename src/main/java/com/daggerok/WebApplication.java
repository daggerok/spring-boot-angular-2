package com.daggerok;

import com.daggerok.cnf.DataRestCnf;
import com.daggerok.data.User;
import com.daggerok.data.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.RandomStringUtils;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.data.convert.Jsr310Converters;

import java.util.stream.IntStream;

@Slf4j
@Import({
        DataRestCnf.class
})
@SpringBootApplication(scanBasePackageClasses = {Jsr310Converters.class})
public class WebApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(UserRepository userRepository) {

        userRepository.deleteAll();

        IntStream.range(5, 7)
                .mapToObj(RandomStringUtils::randomAlphanumeric)
                .map(User::of)
                .forEach(userRepository::save);

        return args -> log.info("\n\n{}\n", userRepository.findAll());
    }
}

