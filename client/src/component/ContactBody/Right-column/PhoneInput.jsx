import React from "react";
import PropTypes from "prop-types";

import TextInput from "./TextInput";

const PhoneInput = (props) => {
  // prevent passing type and validator props from this component to the rendered form field component
  const { type, validator, ...restProps } = props;

  const validatePhoneInput = (value, label) => {
    const regex = /^[+][(]{0,1}[0-9]{3}[)]{0,1}[\s.]{0,1}[0-9]{2}[\s.]{0,1}[0-9]{3}[\s.]{0,1}[0-9]{4}$/;
    if (!regex.test(value)) throw new Error(`${label} is invalid`);
  };

  return <TextInput type="tel" validator={validatePhoneInput} {...restProps} />;
};

PhoneInput.propTypes = {
  label: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onStateChanged: PropTypes.func,
};

export default PhoneInput;
