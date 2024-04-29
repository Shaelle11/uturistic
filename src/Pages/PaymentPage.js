import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import './PaymentPage.css'; // Import the CSS file

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    numberOfTickets: 1,
    fullName: '',
    email: '',
  });

  const [totalAmount, setTotalAmount] = useState(1000);

  const publicKey = 'pk_live_b05bf0b0e44aa8f20a04529d6d05b4779aebd72b'; // Replace with your Paystack public key

  const handlePaymentSuccess = (response) => {
    console.log('Payment successful:', response);
    // Redirect or perform further actions upon successful payment
  };

  const handlePaymentFailure = (response) => {
    console.error('Payment failed:', response);
    // Handle payment failure
  };

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onChangeNumberOfTickets = (event) => {
    const numberOfTickets = parseInt(event.target.value, 10);
    setFormData({
      ...formData,
      numberOfTickets,
    });
    setTotalAmount(1000 * numberOfTickets);
  };

  return (
    <div className="payment-container"> {/* Add className for styling */}
      <h2>Buy Tickets</h2>
      <label htmlFor="numberOfTickets">Number of Tickets:</label>
      <input
        type="number"
        id="numberOfTickets"
        name="numberOfTickets"
        value={formData.numberOfTickets}
        onChange={onChangeNumberOfTickets}
      />

      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={onChangeInput}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={onChangeInput}
      />

      <p>Total Amount: ₦{totalAmount}</p>

      <PaystackButton
        text="Pay Now"
        className="paystack-button"
        callback={handlePaymentSuccess}
        close={handlePaymentFailure}
        embed={false}
        reference={`ticket_${Date.now()}`}
        email={formData.email}
        amount={totalAmount * 100} // Paystack amount is in kobo (1 Naira = 100 kobo)
        publicKey={"pk_live_b05bf0b0e44aa8f20a04529d6d05b4779aebd72b"}
        channels={['card', 'bank']}
        currency="NGN" // Nigerian Naira currency code
      />
    </div>
  );
};

export default PaymentPage;
