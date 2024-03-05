FROM node:18.15.0 as install
ARG NPM_TOKEN
ENV NPM_TOKEN ${NPM_TOKEN}

WORKDIR /app
COPY . .
RUN yarn

FROM install as build
RUN yarn build

FROM build as test
RUN yarn lint

FROM test as publish
RUN npm publish | true
