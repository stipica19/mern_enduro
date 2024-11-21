# Stage 1: Build React (Vite) aplikacije
FROM node:18 AS builder

# Postavljanje radnog direktorija
WORKDIR /usr/src/app

# Kopiraj package.json i package-lock.json
COPY package*.json ./

# Instalacija zavisnosti
RUN npm install --legacy-peer-deps
# Kopiraj sve datoteke aplikacije
COPY . .

# Build aplikacije
RUN npm run build

# Stage 2: Posluživanje sa Nginx-om
FROM nginx:latest

# Kopiraj build iz prvog stage-a u Nginx-ov direktorijum
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Expose port 80 za HTTP
EXPOSE 80

# Pokreni Nginx
CMD ["nginx", "-g", "daemon off;"]