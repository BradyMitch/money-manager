ARG NODE_IMAGE_TAG
FROM node:${NODE_IMAGE_TAG}

WORKDIR /app

ENV NODE_ENV=development

COPY . .

RUN npm install

EXPOSE 7600

CMD ["npm", "run", "dev"]
