import http from 'http';
import { createPreference } from './paymentController.js';
import mercadopago from 'mercadopago';

const hostname = '127.0.0.1';
const port = 5176;

// Configuración de MercadoPago
try {
  mercadopago.configurations.configure({
    access_token: 'TEST-1474310529538889-031221-eb5988dd12e35ea2edee1c4c130f94bb-327361025'
  });
} catch (error) {
  console.error('Error configuring MercadoPago:', error);
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/create_preference') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      req.body = JSON.parse(body);
      createPreference(req, res);
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});