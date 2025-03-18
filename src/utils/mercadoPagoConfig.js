// filepath: c:\Users\nicor\Desktop\e-commerce\e-commerce\src\utils\mercadoPagoConfig.js
import mercadopago from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();

// Agrega tus credenciales
mercadopago.configurations.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
});

export default mercadopago;