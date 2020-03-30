FROM node:12.16.1-alpine3.9 as builder

WORKDIR /edge
COPY ./ /edge

RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash git openssh && \
    yarn install

FROM node:12.16.1-alpine3.9
COPY --from=builder /edge /

EXPOSE 3000

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

CMD /wait
CMD ["yarn", "start:dev"]
