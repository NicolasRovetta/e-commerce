// filepath: c:\Users\nicor\Desktop\e-commerce\e-commerce\src\controllers\paymentController.js
import mercadopago from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();

mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_ACCESS_TOKEN);

export const createPreference = (req, res) => {
  const preference = {
    items: [
      {
        title: req.body.title,
        unit_price: req.body.price,
        quantity: req.body.quantity,
      },
    ],
    back_urls: {
      success: 'http://localhost:5178/success',
      failure: 'http://localhost:5178/failure',
      pending: 'http://localhost:5178/pending',
    },
    auto_return: 'approved',
  };

  mercadopago.preferences.create(preference)
    .then(response => {
      res.writeHead(302, { Location: response.body.init_point });
      res.end();
    })
    .catch(error => {
      console.error('Error creating preference:', error);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Error creating preference' }));
    });
};