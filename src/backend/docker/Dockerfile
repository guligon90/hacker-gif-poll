FROM python:3.8-alpine3.11

LABEL maintainer="guligon90@gmail.com"

ENV PYTHONBUFFERED 1
ENV BACKEND_ROOT /hacker_gif_poll/backend

WORKDIR $BACKEND_ROOT
COPY ["./hacker_gif_poll/requirements.txt", "./hacker_gif_poll/requirements-dev.txt", "./"]

ARG TZ
# Set timezone
RUN apk add --no-cache tzdata \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone \
    && apk add --no-cache postgresql-libs  \
    # To build Psycopg you need the packages gcc musl-dev postgresql-dev.
    # Then you also need that pg_config executable: while simply installing postgresql-dev will work,
    # postgresql-libs does fine too and takes up some 12 MB less space.
    && apk add --no-cache --virtual \
        .build-deps \
        gcc \
        musl-dev \
        postgresql-dev \
        libffi-dev \
        libressl-dev \
    && python3 -m pip install \
        -r requirements.txt \
        -r requirements-dev.txt \
        --no-cache-dir \
    && apk --purge del .build-deps

# Don't run as root
RUN addgroup -g 1000 python \
    && adduser -u 1000 -G python -s /bin/sh -D python \
    && chown -R python:python $BACKEND_ROOT

# USER affects only RUN, CMD and ENTRYPOINT
USER python:python

COPY --chown=python:python ./docker/wait-for.sh ..
COPY --chown=python:python ./hacker_gif_poll .

EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]