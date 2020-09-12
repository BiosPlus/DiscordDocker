#Pull latest node alpine image as a base
FROM node:alpine

#Make bot directories
RUN mkdir -p /app
WORKDIR /app

#Copy package.json and install the bot
COPY package.json /app
RUN npm install

#Copy the rest of the bot to the dir
COPY . /app

#Boot the instance
CMD ["node", "main.js"]