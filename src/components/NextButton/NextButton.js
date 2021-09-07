import React from "react";
import classes from "./NextButton.module.css";

const NextButton = ({
  value = "Next2",
  isSubmitting = false,
  className = "",
  disabled = false,
  ...props
}) => {
  let builtClass = [classes.btn, classes[className]].join(" ");
  let children = value;
  if (isSubmitting) {
    disabled = true;
    children = <img src="images\Loading.svg" alt="loading"/>;
  }


  
  return (
    <button className={classes.NextButton}>
      {children}
    </button>
  );
};

export default NextButton;
