FROM node:16

# Create app directory
WORKDIR /usr/src/app

ENV DBUSER=postgres
ENV DB=postgres
ENV DBPASS=
ENV DBHOST=
ENV DBPORT=5432
ENV PORT=3000

RUN git clone https://github.com/Vivek-Madenur/node3tier.git
RUN pwd
RUN ls
WORKDIR /usr/src/app/node3tier/api
RUN pwd
RUN ls

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]