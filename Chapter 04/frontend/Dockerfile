FROM node:19-alpine

WORKDIR /app/frontend

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]
