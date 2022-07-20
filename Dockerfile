ARG PHP_VERSION=8.1

FROM ghcr.io/myparcelnl/php-xd:${PHP_VERSION} AS test

WORKDIR /app

COPY composer.json composer.lock ./

RUN composer install --dev

COPY src/   ./src/
COPY tests/ ./tests/

CMD ["vendor/bin/phpunit", "--coverage-clover", "clover.xml"]


FROM ghcr.io/myparcelnl/php-xd:${PHP_VERSION} AS dev

CMD ["sleep", "infinity"]
