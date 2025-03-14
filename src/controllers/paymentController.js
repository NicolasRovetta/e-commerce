import mercadopago from 'mercadopago';

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
      success: 'http://localhost:5175/success',
      failure: 'http://localhost:5175/failure',
      pending: 'http://localhost:5175/pending',
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
