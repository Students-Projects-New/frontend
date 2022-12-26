######### STAGE 1:BUILD #########
FROM node:latest AS build

# Make /app as working directory
WORKDIR /app

# Copy all files from current directory to /app
COPY ./ /app/

# Install dependencies
RUN npm install --legacy-peer-deps

# ARG configuration=production
ARG configuration=production

# Build the application
RUN npm run build -- --configuration=$configuration



######### STAGE 2:RUN #########
FROM nginx:latest AS nginx

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the nginx.conf file to override the default nginx configuration
COPY ./nginx.conf  /etc/nginx/conf.d/default.conf

# Copy dist folder fro build stage to nginx public folder
COPY --from=build /app/dist/students-projects /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx service
CMD ["nginx", "-g", "daemon off;"]