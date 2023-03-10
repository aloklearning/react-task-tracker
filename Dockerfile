# syntax=docker/dockerfile:1

# Starting builder from the from alpine image
FROM node:18-alpine

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

# Copies every file from the app to the image
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

