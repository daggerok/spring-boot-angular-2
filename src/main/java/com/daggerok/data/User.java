package com.daggerok.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;
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
@NoArgsConstructor
@RequiredArgsConstructor(staticName = "of")
@JsonIgnoreProperties(ignoreUnknown = true)
public class User implements Serializable {

    private static final long serialVersionUID = 4543948388546813288L;

    @Id String id;
    @NonNull String username;
    LocalDateTime createdAt = LocalDateTime.now();
    String createdAtString = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    // String createdAtString = createdAt.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
}
