FROM node:17-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@latest

RUN npm ci

COPY . ./

ENTRYPOINT [ "npm", "start" ]