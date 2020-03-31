FROM node:12.16.1-alpine

WORKDIR /edge

COPY . .

RUN yarn install
RUN yarn build

EXPOSE 3000

# Wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

CMD /wait && yarn start:dev
