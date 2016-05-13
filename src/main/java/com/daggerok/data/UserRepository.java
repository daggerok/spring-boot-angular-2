package com.daggerok.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by mak on 5/13/16.
 */
@RepositoryRestResource
public interface UserRepository extends CrudRepository<User, String> {
}
