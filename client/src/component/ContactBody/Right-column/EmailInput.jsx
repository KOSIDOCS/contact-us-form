import React from "react";
import PropTypes from "prop-types";
import { validate } from "isemail";

import TextInput from "./TextInput";

const EmailInput = (props) => {
  // prevent passing type and validator props from this component to the rendered form field component
  const { type, validator, ...restProps } = props;

  // validateEmail function using the validate() method of the isemail package
  const validateEmail = (value, label) => {
    if (!validate(value, { minDomainAtoms: 2 }))
      throw new Error(`${label} is invalid`);
  };

  // pass the validateEmail to the validator props
  return <TextInput type="email" validator={validateEmail} {...restProps} />;
};

EmailInput.propTypes = {
  label: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onStateChanged: PropTypes.func,
};

export default EmailInput;
