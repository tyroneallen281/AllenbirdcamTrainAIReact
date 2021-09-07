import React from "react";
import classes from "./VFSCancelModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const VFSCancelModal = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "0.5rem",
      border: "1px solid var(--color-modal-text)"
    },
  };

  return (
    <Modal
      isOpen={props.show}
      onRequestClose={props.toggle}
      style={customStyles}
      contentLabel="Cancel Purchase"
    >
      <div className={classes.CancelModalHeader}>Cancel Purchase?</div>
      <div className={classes.CancelModalBody}>
        <p>Are you sure?</p>
        <p>If you cancel you will lose the information.</p>
      </div>
      <div className={classes.CancelModalFooter}>
        <button className={classes.Cancel} onClick={props.toggle}>Close</button>
        <button className={classes.Submit} onClick={props.cancel}>Yes</button>
      </div>
    </Modal>
  );
};

export default VFSCancelModal;
