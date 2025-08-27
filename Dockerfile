# Usa una imagen oficial de Node.js como base
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install --production

# Copia el resto del código fuente
COPY . .

# Expone el puerto de la API (ajusta si usas otro)
EXPOSE 8000

# Comando para iniciar la app NestJS
CMD ["npm", "run", "start:prod"]