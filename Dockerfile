# Stage 1 - the build process
FROM node:14 as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.21.1-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
