ARG NODE_IMAGE_TAG
FROM node:${NODE_IMAGE_TAG}

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 7500

CMD [ "npm", "run", "dev" ]
