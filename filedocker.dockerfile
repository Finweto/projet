# syntax=docker/dockerfile:1
FROM node:16

WORKDIR /Desktop/Microservice/projet
COPY package*.json ./
RUN npm install
CMD ["node", "index.js"]
EXPOSE 3000