ARG PHP_VERSION=7.2

FROM php:${PHP_VERSION}-alpine AS test

WORKDIR /app

COPY . .

RUN sleep 10

ENTRYPOINT ["touch", "coverage.xml"]


FROM php:${PHP_VERSION}-alpine AS dev

COPY . .

RUN sleep 10

ENTRYPOINT ["/sbin/tini", "--"]
