import React from 'react';
import './Receipt.css'; // Ensure you create and style this CSS file

const Receipt = ({ details }) => {
  const { fullName, email, paymentType, amount } = details;

  const printReceipt = () => {
    window.print();
  };

  return (
    <div className="receipt-container">
      <header className="receipt-header">
        <h2>Payment Receipt</h2>
      </header>
      <div className="receipt-body">
        <p>Name: {fullName}</p>
        <p>Email: {email}</p>
        <p>Service Purchased: {paymentType}</p>
        <p>Amount Paid: ₦{amount}</p>
      </div>
      <div className="receipt-footer">
        <button onClick={printReceipt}>Print Receipt</button>
      </div>
    </div>
  );
};

export default Receipt;
