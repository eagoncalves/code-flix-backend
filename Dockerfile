FROM node:20.5.1-slim

USER node

WORKDIR /home/node/app

# Ficar lendo de forma indefinida assim como ocorre no nodemon.
CMD ['tail', '-f', '/dev/null']
