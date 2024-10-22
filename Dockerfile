# Build the Vite app
FROM node:lts-alpine AS builder

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code and build the app
COPY . .
RUN npm run build

# Move build to www folder
RUN mkdir -p /var/www/pauel.eu && cp -r /usr/src/app/build/* /var/www/pauel.eu
