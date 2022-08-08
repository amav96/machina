#Primer paso para constuir proyecto
FROM node:16.13.1 as build
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#paso dos create nginx server
FROM nginx:latest as prod-stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx","-g","daemon off;"]