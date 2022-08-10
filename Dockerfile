#Primer paso para constuir proyecto
FROM node:16.13.1 as build

WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm run build

# Stage 2 - Deploy with NGNIX
FROM nginx:1.15.2-alpine

COPY --from=build /usr/src/app/dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]
