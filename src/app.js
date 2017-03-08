import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import http from 'http';
import config from './config';
import router from './router';

const app = express();

mongoose.Promise = Promise;
mongoose.connect(config.mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.text);
// app.use(bodyParser.json({ type: 'application/json' }));


const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// for routing
router(app);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  const portValue = parseInt(val, 10);

  if (isNaN(portValue)) {
    return val;
  }

  if (portValue >= 0) {
    return portValue;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(` ${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
}

export default app;
