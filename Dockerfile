FROM node:8.9-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN apk update && \
  apk add --update git && \
  apk add --update openssh

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run seed

EXPOSE 3000

CMD ["npm", "start"]