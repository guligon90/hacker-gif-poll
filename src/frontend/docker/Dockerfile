FROM alpine:3.11

LABEL maintainer="guligon90@gmail.com"

# Set timezone
ARG TZ
RUN apk add --no-cache tzdata \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Default repository contains old LTS version of node
RUN echo -e '\nhttp://dl-cdn.alpinelinux.org/alpine/v3.10/community' >> /etc/apk/repositories \
    && apk add --no-cache 'nodejs-current>12' yarn

ENV FRONTEND_ROOT /hacker_gif_poll/frontend

# Don't run as root
RUN addgroup -g 1000 node \
    && adduser -u 1000 -G node -s /bin/sh -D node \
    && mkdir -p $FRONTEND_ROOT \
    && chown -R node:node $FRONTEND_ROOT

# USER affects only RUN, CMD and ENTRYPOINT
USER node:node

WORKDIR $FRONTEND_ROOT

COPY --chown=node:node ["./hacker_gif_poll/package.json", "./hacker_gif_poll/yarn.lock", "./"]
RUN yarn install --network-concurrency 1 \
    && yarn cache clean

COPY --chown=node:node ./hacker_gif_poll ./

# dev server
EXPOSE 3000

CMD ["yarn", "run", "start"]
