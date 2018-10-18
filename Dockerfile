FROM node:carbon
COPY . .
CMD [ "node", "dist/server.js" ]