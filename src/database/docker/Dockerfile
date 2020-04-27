FROM postgres:12-alpine

LABEL maintainer="guligon90@gmail.com"

# Set timezone
ARG TZ
RUN apk add --no-cache tzdata \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 5432

# Healthcheck script to verify if database is up.
COPY isDatabaseUp ./
RUN chmod +x isDatabaseUp

# two minutes should be enough to initialize the database
# 2min = 120s => 120s/5s = 24 retries...
HEALTHCHECK --interval=5s --timeout=2s --retries=24 CMD [ "./isDatabaseUp" ]
