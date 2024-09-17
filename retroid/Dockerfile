## Fichier : ./retroid/Dockerfile
FROM node:18.10.0-alpine3.15

WORKDIR /var/www/html/cours-mds/workshop-M1/WORKSHOP/retroid

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]