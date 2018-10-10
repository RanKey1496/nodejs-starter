import 'reflect-metadata';
import App from './app';

console.info(`
888     888          888      d8b          888               .d8888b.                            d8b
888     888          888      Y8P          888              d88P  Y88b                           Y8P
888     888          888                   888              Y88b.
Y88b   d88P  .d88b.  88888b.  888  .d8888b 888  .d88b.       "Y888b.    .d88b.  888d888 888  888 888  .d8888b  .d88b.
 Y88b d88P  d8P  Y8b 888 "88b 888 d88P"    888 d8P  Y8b         "Y88b. d8P  Y8b 888P"   888  888 888 d88P"    d8P  Y8b
  Y88o88P   88888888 888  888 888 888      888 88888888           "888 88888888 888     Y88  88P 888 888      88888888
   Y888P    Y8b.     888  888 888 Y88b.    888 Y8b.         Y88b  d88P Y8b.     888      Y8bd8P  888 Y88b.    Y8b.
    Y8P      "Y8888  888  888 888  "Y8888P 888  "Y8888       "Y8888P"   "Y8888  888       Y88P   888  "Y8888P  "Y8888
`);

process.on('uncaughtException', (err) => {
    console.error(`
    --------------------
    Unhandled Exception:
    ${err.message}
    --------------------
    `);
});

process.on('unhandledRejection', (err) => {
    console.error(`
    --------------------
    Unhandled Rejection:
    ${err.message}
    --------------------
    `);
});

const app: App = new App();
app.start();
module.exports = app;