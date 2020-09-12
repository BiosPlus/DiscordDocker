#Pull latest node alpine image as a base
FROM node:alpine

#Dependencies
    #For some reason some node ext's need python
    RUN apt-get update
    RUN apt-get install python && apt-get clean

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