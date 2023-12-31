# Stage 1: Build the application
FROM node:14 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -f
COPY . .
RUN npm run build

CMD ["npm", "start"]