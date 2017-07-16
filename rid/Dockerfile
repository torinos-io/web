FROM node:8.1.4-alpine


#  Yarn
#-----------------------------------------------
# To avoid .roadrunner.json error https://github.com/yarnpkg/yarn/issues/1724
RUN mkdir -p /root/.cache/yarn


#  Timezone
#-----------------------------------------------
ENV TIMEZONE Asia/Tokyo

RUN apk add --no-cache -U tzdata \
  && ln -sf /usr/share/zoneinfo/$TIMEZONE /etc/localtime


#  Library
#-----------------------------------------------
RUN apk add --no-cache -U \
    bash \
    build-base \
    coreutils \
    git \
    make


#  App
#-----------------------------------------------
WORKDIR /app
