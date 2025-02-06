# Utilisation de l'image Node.js légère
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Exposer le port 5000 pour l'API
EXPOSE 3000

# Démarrer l'API Node.js
CMD ["node", "server.js"]
