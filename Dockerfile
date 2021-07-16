FROM node:14

# Create app directory
WORKDIR /usr/src/app

#COPY package*.json ./
COPY package.json package.json
COPY package-lock.json package-lock.json


RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]


## Run as below on command line 
# docker build . -t <your username>/node-web-app
# docker images
# docker run -p 3001:3000 -d <your username>/node-web-app

# Get container ID
# docker ps

# Print app output
# docker logs <container id>

# Example
# Running on http://localhost:3001

# Enter the container
# docker exec -it <container id> /bin/bash


