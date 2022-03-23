FROM nginx:1.21.3-alpine

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/conf.d /etc/nginx/conf.d

COPY ./dist/ /var/www/