FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV MONGODB_URI=mongodb+srv://kube-post:pW46yOXdYRSU0RVd@cluster0.6lrvr.mongodb.net/?retryWrites=true&w=majority

EXPOSE 3000

CMD [ "npm", "start" ]

# FROM node:14-alpine as builder

# WORKDIR /app

# COPY package.json .

# RUN npm install

# COPY . .

# RUN npm run build

# FROM nginx:1.19-alpine

# COPY --from=builder /app/build /usr/share/nginx/html

# COPY conf/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 3000

# CMD [ "nginx", "-g", "daemon off;" ]