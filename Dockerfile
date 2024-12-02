# Usar a imagem mais leve de Node.js com Alpine
FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "src/index.js"]
