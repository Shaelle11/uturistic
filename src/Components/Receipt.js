import React, { useEffect } from 'react';
import './Receipt.css'; // Ensure you create and style this CSS file

const ReceiptPopup = ({ details }) => {
  const { fullName, email, program, amount } = details;

  useEffect(() => {
    // Open the popup window when the component mounts
    const popupWindow = window.open('', '_blank', 'width=600,height=400');
    if (popupWindow) {
      // Render the Receipt component inside the popup window
      popupWindow.document.body.innerHTML = `
        <div class="popup-container">
          <header class="popup-header">
            <h2>Payment Receipt</h2>
          </header>
          <div class="popup-body">
            <p>Name: ${fullName}</p>
            <p>Email: ${email}</p>
            <p>Service Purchased: ${program}</p>
            <p>Amount Paid: ₦${amount}</p>
          </div>
          <div class="popup-footer">
            <button onclick="window.print()">Print Receipt</button>
          </div>
        </div>
      `;
    }
  }, [fullName, email, program, amount]);

 
};

export default ReceiptPopup;
