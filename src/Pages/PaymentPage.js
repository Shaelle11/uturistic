import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import './PaymentPage.css';
import Receipt from '../Components/Receipt';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    paymentType: 'general',
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

  const totalAmount = prices[formData.paymentType] * formData.numberOfUnits;

  const publicKey = 'pk_test_51483c12c88f754b47f5d08405c28222a90fbdaf'; // Replace with your Paystack public key

  const handlePaymentSuccess = (response) => {
    console.log('Payment successful:', response);
    setPaymentSuccessful(true); // Set payment status to successful
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

  return (
    <div className="payment-container">
      {!paymentSuccessful && (
        <>
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
            currency="NGN"
          />
        </>
      )}
      {paymentSuccessful && <Receipt details={{ ...formData, amount: totalAmount }} />}
    </div>
  );
};

export default PaymentPage;
