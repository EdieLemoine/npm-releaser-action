ARG PHP_VERSION=7.2

FROM php:${PHP_VERSION}-alpine AS base

RUN apk update && \
    apk add --no-cache \
        composer \
        # https://github.com/krallin/tini
        tini \
        # Dependencies needed for installing XDebug
        $PHPIZE_DEPS && \
    composer selfupdate --2 && \
    # Install XDebug
    pecl install xdebug && \
    docker-php-ext-enable xdebug && \
    touch /usr/local/etc/php/conf.d/zzz-xdebug.ini && \
    echo 'xdebug.mode = coverage' >> /usr/local/etc/php/conf.d/zzz-xdebug.ini && \
    echo 'xdebug.client_host = host.docker.internal' >> /usr/local/etc/php/conf.d/zzz-xdebug.ini


FROM base AS test

WORKDIR /app

COPY . .

RUN composer install

ENTRYPOINT ["/app/vendor/bin/phpunit", "--coverage-clover", "clover.xml"]


FROM base AS dev

ENTRYPOINT ["/sbin/tini", "--"]
