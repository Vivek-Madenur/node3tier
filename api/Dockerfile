FROM node:16

# Create app directory
WORKDIR /usr/src/app

ENV DBUSER=${_DBUSER}
ENV DB=${_DB}
ENV DBPASS=${_DBPASS}
ENV DBHOST=${_DBHOST}
ENV DBPORT=${_DBPORT}
ENV PORT=${_PORT}

COPY /api/package*.json ./

RUN npm install

# Bundle app source
COPY /api .

EXPOSE 3000

CMD [ "npm", "start" ]