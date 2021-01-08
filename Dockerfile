#Pull latest node alpine image as a base
FROM node:14-slim

LABEL maintainer="BiosPlus"

ARG BRANCH
ARG COMMIT
ARG BUILD_DATE

#Dependencies
    #For some reason some node ext's need python
    RUN apt-get update
    RUN apt-get install python && apt-get clean

#Make bot directories
RUN mkdir -p /app
WORKDIR /app

#Add build info
RUN echo "Build Info\nBranch:\t${BRANCH}\nCommit:\t${COMMIT}\nBuild Date:\t${BUILD_DATE}" > /app/buildinfo.txt && \ 
    cat /app/buildinfo.txt

#Copy package.json and install the bot
COPY package.json /app
RUN npm install -g pnpm
RUN pnpm install

#Copy the rest of the bot to the dir
COPY . /app

#Boot the instance
CMD ["node", "main.js"]