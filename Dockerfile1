FROM ubuntu:latest
ENV LC_ALL=C
ENV DEBIAN_FRONTEND=noninteractive
ENV DEBCONF_NONINTERACTIVE_SEEN=true

RUN groupadd --gid 1000 node \
  && useradd --uid 1000 --gid node --shell /bin/bash --create-home node

RUN apt-get -qqy update
RUN apt-get -qqy install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get -qqy --force-yes --no-install-recommends install \
  git \
  nodejs \
  openjdk-8-jre-headless
RUN node --version \
npm --version

RUN mkdir -p ./usr/weathertest
COPY ./ ./usr/weathertest
WORKDIR /usr/weathertest
RUN chown node:node -R .
RUN chmod 777 -R .

USER node
RUN npm install

USER root
CMD npm run test:unit
