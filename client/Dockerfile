FROM node:18.17.1 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Faza posluživanja
FROM nginx:alpine
# Kopiraj build fajlove iz prve faze
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]