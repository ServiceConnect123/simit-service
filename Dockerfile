# Etapa de build
FROM node:20-alpine AS builder
WORKDIR /app

# Copia archivos de dependencias
COPY package*.json ./
RUN npm install

# Copia todo el código y compila
COPY . .
RUN npm run build

# Etapa de producción
FROM node:20-alpine
WORKDIR /app

# Copia solo lo necesario desde la etapa builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Expone el puerto de la API
EXPOSE 8000

# Comando para iniciar la app en modo producción
CMD ["node", "dist/main.js"]
