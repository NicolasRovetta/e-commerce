import mercadopago from './mercadoPagoConfig.js';

export const createPreference = async (req, res) => {
  const preference = {
    items: [
      {
        title: 'Mi producto',
        quantity: 1,
        unit_price: 2000,
      },
    ],
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    res.json({
      id: response.body.id,
    });
  } catch (error) {
    console.error('Error al crear la preferencia:', error);
    res.status(500).json({ error: 'Error al crear la preferencia' });
  }
};