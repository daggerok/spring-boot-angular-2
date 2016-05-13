spring-boot-angular-2 [![build](https://travis-ci.org/daggerok/spring-boot-angular-2.svg?branch=master)](https://travis-ci.org/daggerok/spring-boot-angular-2)
==========================

sources

```bash
git clone --depth=1 --branch=master https://github.com/daggerok/spring-boot-angular-2.git spring-boot-angular-2
cd $_
```

start redis server (docker is required)

```bash
docker-compose up -d
```

point spring.redis.host to your docker ip address in `src/main/resources/application.yml`:

  - run `docker-machine ip` command for osx
  - localhost for linux 

bash

```bash
gradle clean && npm run build && gradle bootRun
```

fish

```fish
gradle clean; npm run build; gradle bootRun
```

development backend

```bash
gradle bootRun
```

development frontend

```bash
npm start
```

stop redis server

```bash
docker-compose down
```
