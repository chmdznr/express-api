FROM node:14-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
COPY env.docker .env

EXPOSE 5000

CMD ["node", "index.js"]
