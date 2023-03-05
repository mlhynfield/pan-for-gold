FROM node:fermium-buster-slim

MAINTAINER Marcus Hynfield <marcus@hynfield.org>

WORKDIR /app
COPY lib lib
COPY spec spec
COPY index.js .
COPY package.json .

EXPOSE 3000

RUN npm install

RUN npm test

CMD ["npm", "start"]
