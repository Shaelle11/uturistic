import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import './PaymentPage.css'; 
import Receipt from '../Components/Receipt';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    paymentType: 'general', // default payment type
    numberOfUnits: 1,
    fullName: '',
    email: '',
  });
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const prices = {
    general: 1000,
    scavenger: 500,
    displayAds: 3000,
    vendors: 5000,
  };

  // Calculate total amount based on payment type and number of units
  const totalAmount = prices[formData.paymentType] * formData.numberOfUnits;

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

  if (paymentSuccessful) {
    return <Receipt details={{...formData, amount: totalAmount}} />;
  }
   
  return (
    <div className="payment-container">
      <h2>Buy Tickets</h2>
      <select name="paymentType" value={formData.paymentType} onChange={onChangeInput}>
        <option value="general">General Tickets (₦1000 each)</option>
        <option value="scavenger">Scavenger Hunt (₦500 each)</option>
        <option value="displayAds">Display Ads (₦3000 each)</option>
        <option value="vendors">Vendors (₦5000 each)</option>
      </select>

      <label htmlFor="numberOfUnits">Number of Units:</label>
      <input
        type="number"
        id="numberOfUnits"
        name="numberOfUnits"
        value={formData.numberOfUnits}
        onChange={onChangeInput}
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
        reference={`purchase_${Date.now()}`}
        email={formData.email}
        amount={totalAmount * 100} // Paystack amount is in kobo (1 Naira = 100 kobo)
        publicKey={publicKey}
        channels={['card', 'bank']}
        currency="NGN" // Nigerian Naira currency code
      />
    </div>
  );
};

export default PaymentPage;
