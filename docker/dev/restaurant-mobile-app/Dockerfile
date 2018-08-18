FROM node:9.2-slim

RUN apt-get update \
  && apt-get install git -y

RUN apt-get update \
  && apt-get install libtool automake build-essential pkg-config python-dev libssl-dev -y \
  && cd /root \
  && git clone https://github.com/facebook/watchman.git \   
  && cd watchman \
  && git checkout v4.9.0 \ 
  && ./autogen.sh \
  && ./configure \
  && make \
  && make install

CMD /usr/src/app/docker/dev/restaurant-mobile-app/docker_init.sh