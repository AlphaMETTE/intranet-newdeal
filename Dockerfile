ARG BASE_IMAGE=nginx:alpine3.23

FROM ${BASE_IMAGE}

# Supprimer la page par défaut de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copier le site statique dans le dossier nginx
COPY ./site/ /usr/share/nginx/html/

# Exposer le port 80
EXPOSE 80

# Démarrer nginx en mode foreground
CMD ["nginx", "-g", "daemon off;"]