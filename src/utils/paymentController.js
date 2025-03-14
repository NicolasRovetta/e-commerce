import mercadopago from './mercadoPagoConfig.js';

export const createPreference = async (req, res) => {
  const preference = {
    items: [
      {
        title: 'Mi producto',  // chequear a futuro
        quantity: 1,           // chequear a futuro
        unit_price: 2000,      // chequear a futuro
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