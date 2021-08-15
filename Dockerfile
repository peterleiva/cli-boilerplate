ARG NODE_VERSION=alpine
FROM node:${NODE_VERSION}

ENV USER "node"
ENV LOG_LEVEL "info"

# Define node user which is the app's runner
USER $USER

# setup application folders
WORKDIR /home/$USER/app
COPY --chown=$USER:$USER . .
RUN npm ci

CMD ["npm", "start"]
