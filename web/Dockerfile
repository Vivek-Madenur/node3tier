FROM node:16

ARG PORT
ARG API_HOST

# Create app directory
WORKDIR /usr/src/app

ENV PORT=${PORT}
ENV API_HOST=${API_HOST}

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY /web/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY /web .

EXPOSE 3001
CMD [ "npm", "start" ]