FROM nginx:1.11.10-alpine

COPY dist/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]
