FROM node:16

ARG DBUSER
ARG DB
ARG DBPASS
ARG DBHOST
ARG DBPORT
ARG PORT

# Create app directory
WORKDIR /usr/src/app

ENV DBUSER=${DBUSER}
ENV DB=${DB}
ENV DBPASS=${DBPASS}
ENV DBHOST=${DBHOST}
ENV DBPORT=${DBPORT}
ENV PORT=${PORT}

COPY /api/package*.json ./

RUN npm install

# Bundle app source
COPY /api .

EXPOSE 3000

CMD [ "npm", "start" ]