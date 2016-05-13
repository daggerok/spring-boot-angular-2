package com.daggerok.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * Created by mak on 5/13/16.
 */
@Data
@RedisHash
@RequiredArgsConstructor(staticName = "of")
@JsonIgnoreProperties(ignoreUnknown = true)
public class User implements Serializable {

    private static final long serialVersionUID = 4543948388546813288L;

    final String createdAt = LocalDateTime.now().format(DateTimeFormatter.BASIC_ISO_DATE);
    @Id String id;
    @NonNull String username;
}
