import 'reflect-metadata';
import App from './app';

process.on('uncaughtException', (err) => {
    console.log('Unhandled Exception ', err.message);
});

process.on('unhandledRejection', (err) => {
    console.log('Unhandled Rejection ', err.message);
});

const app: App = new App();
app.start();
module.exports = app;