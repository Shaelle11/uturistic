import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import Receipt from '../Components/Receipt'; 
import './PaymentPage.css';


const PaymentPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    program: 'general',
  });
  const [paymentAmount, setPaymentAmount] = useState(1000);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({});
  const [numberOfUnits, setNumberOfUnits] = useState(1);

  const handleProgramChange = (program) => {
    setFormData({...formData, program });
    switch (program) {
      case 'general':
        setPaymentAmount(1000);
        break;
      case 'displayAds':
        setPaymentAmount(3000);
        break;
      case 'vendors':
        setPaymentAmount(6000);
        break;
      case 'scavenger':
        setPaymentAmount(500);
        break;
      default:
        setPaymentAmount(1000);
        break;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUnitChange = (e) => {
    const units = parseInt(e.target.value);
    setNumberOfUnits(units >= 1 ? units : 1);
  };

  const handlePaymentSuccess = (response) => {
    // Here we simulate payment verification directly in frontend
    setPaymentSuccessful(true);
    setPaymentDetails({
      reference: response.reference,
      status: 'success',
      message: 'Thank you for your payment!'
    });
  };

  const handlePaymentFailure = (response) => {
    setPaymentSuccessful(true);
    setPaymentDetails({
      reference: response.reference,
      status: 'failed',
      message: 'Payment failed. Please try again.'
    });
  };

  const closeReceiptPopup = () => {
    setPaymentSuccessful(false); // Close the receipt popup
  };

  return (
    <div className="payment-container">
      <h2>Buy Tickets</h2>
      <input type="text" id="fullName" name="fullName" placeholder='Full Name' value={formData.fullName} onChange={handleInputChange} />
      <input type="email" id="email" name="email" value={formData.email} placeholder='Email' onChange={handleInputChange} />

      <select value={formData.program} onChange={(e) => handleProgramChange(e.target.value)}>
        <option value="general">General Ticket (₦1000)</option>
        <option value="displayAds">Display Ads (₦3000)</option>
        <option value="vendors">Vendors (₦6000)</option>
        <option value="scavenger">Scavenger Hunt (₦500)</option>
      </select>

      <input type="number" id="numberOfUnits" name="numberOfUnits" value={numberOfUnits} min="1" onChange={handleUnitChange} />

      <p>Total Amount: ₦{paymentAmount * numberOfUnits}</p>

      <PaystackButton
        text="Pay Now"
        className="paystack-button"
        callback={handlePaymentSuccess}
        close={handlePaymentFailure}
        embed={false}
        reference={`purchase_${Date.now()}`}
        email={formData.email}
        amount={paymentAmount * numberOfUnits * 100}
        publicKey="pk_live_b05bf0b0e44aa8f20a04529d6d05b4779aebd72b"
        channels={['card', 'bank']}
        currency="NGN"
      />


      {paymentSuccessful && <Receipt isOpen={true} details={paymentDetails} onClose={closeReceiptPopup} />}
      <p>For receipt verification, custom ticketing and to get your raffle number</p>
      <a className='message' target='blank' rel='noopener' href='https://wa.me/message/XTBGJQNUXBA2E1'>Send Message</a>
    </div>
  );
};

export default PaymentPage;
