FROM node:carbon
COPY . .
RUN npm install
RUN npm run build
CMD [ "node", "dist/server.js" ]