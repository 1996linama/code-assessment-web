import React from "react";

const ErrorCart = () => (
  <div className="centered-modal-contents">
    <span className="fa fa-credit-card-alt fa-5x" id="creditCard"/>
    <div>
      <p>There was an error processing your payment.</p>
      Check with your bank to verify that your card is active.</div>
  </div>
);

export default ErrorCart;
