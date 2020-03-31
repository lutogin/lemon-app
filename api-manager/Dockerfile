FROM node:12.16.1-alpine

WORKDIR /api-manager

COPY . .

RUN yarn install
RUN yarn build

EXPOSE 3001
