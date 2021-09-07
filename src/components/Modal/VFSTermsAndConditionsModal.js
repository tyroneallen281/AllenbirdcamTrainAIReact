import React from "react";
import classes from "./VFSTermsAndConditionsModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const VFSTermsAndConditionsModal = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "0.5rem",
      border: "1px solid var(--color-modal-text)",
      maxWidth: "70%",
      maxHeight: "70%",
    },
  };

  return (
    <Modal
      isOpen={props.show}
      onRequestClose={props.toggle}
      style={customStyles}
      contentLabel="Terms and Conditions"
    >
      <div className={classes.TermsAndConditionsModalHeader}>
        Vodacom Terms and Conditions
      </div>
      <div className={classes.TermsAndConditionsModalBody}>
        <p>
          <u>
            VodaPay Payment Services Register Card Details &amp; Recurring
            Payments Terms and Conditions
          </u>
        </p>
        <p>By using Vodacom Payment Gateway to</p>
        <ol>
          <li>Register Card Details and/or</li>
          <li>Make Recurring Payments</li>
        </ol>
        <p>You agree to the following terms and conditions of this service.</p>
        <p>
          By using the service/s you warrant that you are at least 18 years of
          age, capable of entering into a legally binding agreement and are the
          primary cardholder for debit or credit cards that are linked to the
          service
        </p>
        <p>
          <u>Description of service Register Card Details</u>
        </p>
        <p>
          Register Card Details is a digital service that is offered and run by
          Vodacom Payment Services (Pty) Ltd (VPS).
        </p>
        <p>
          Register Card Details allows you to store your payment details
          securely and purchase on the website of the merchant you have
          registered your card without having to input your card details again.
        </p>
        <p>
          You can only use the Register Card Details service on your own behalf.
        </p>
        <p>
          You can Register Card Details relating to any eligible bank Visa&amp;
          MasterCard debit and credit card.
        </p>
        <p>
          You will be required to input your card number, expiry date and CVV
          when you register. You will have to confirm your registration with a
          one-time password from your bank
        </p>
        <p>
          VPS does not have control over nor does it take any liability for the
          delivery of, the quality of, the use of, or any other aspect of the
          products or services paid for using the service.&nbsp; Register Card
          Details is service to allow for payment only and all other forms of
          liability relating to the products or services paid for utilising this
          service are specifically excluded.
        </p>
        <p>
          <u>Description of service Recurring Payments</u>
        </p>
        <p>
          Recurring payments is a digital service that is offered and run by
          Vodacom Payment Services (Pty) Ltd (VPS).
        </p>
        <p>
          Recurring payments may be loaded at a merchant as recurring
          transactions, meaning that you authorise us to deduct amounts from
          your Visa or MasterCard debit or credit card whenever you make a
          purchase from such a merchant, without obtaining additional security
          verification from you. You provide this consent to us for the duration
          of your use of the Recurring Payment service.
        </p>
        <p>
          You can only use the Recurring Payments service on your own behalf.
        </p>
        <p>
          You can use the Recurring Payments service with any eligible bank Visa
          MasterCard debit and credit card.
        </p>
        <p>
          VPS does not have control over nor does it take any liability for the
          delivery of, the quality of, the use of, or any other aspect of the
          products or services paid for using the service.&nbsp; Recurring
          payments is service to allow for payment only and all other forms of
          liability relating to the products or services paid for utilising this
          service are specifically excluded.
        </p>
        <p>
          Your will have to contact the merchant you have authorised to make a
          Recurring Payment should you wish to cancel the service.
        </p>
      </div>
      <div className={classes.TermsAndConditionsModalFooter}>
        <button className={classes.Cancel} onClick={props.toggle}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default VFSTermsAndConditionsModal;
