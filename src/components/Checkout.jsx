import React from 'react';

const Checkout = ({ cartItems }) => {
  const handlePayment = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5174/create_preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems.map(item => ({
            title: item.modelo,
            quantity: item.count,
            unit_price: item.precio,
          })),
        }),
      });
      const data = await response.json();
      window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=${data.id}`;
    } catch (error) {
      console.error('Error al crear la preferencia:', error);
    }
  };

  return (
    <button onClick={handlePayment} className="buy" aria-label="Realizar pago">
      Realizar pago
    </button>
  );
};

export default Checkout;