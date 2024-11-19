FROM node:18.17.1 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --legacy-peer-deps  # Dodaj ovu opciju
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]