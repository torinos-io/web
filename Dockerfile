FROM nginx:1.11.10-alpine

RUN apk add --no-cache -U apache2-utils

COPY dist/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/

COPY script/nginx /app/nginx

CMD ["/app/nginx"]
