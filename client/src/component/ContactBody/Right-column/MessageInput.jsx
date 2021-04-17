import React from "react";
import PropTypes from "prop-types";

import TextInput from "./TextInput";

const MessageInput = (props) => {
  // prevent passing type and validator props from this component to the rendered form field component
  const { type, validator, ...restProps } = props;

  // validateEmail function using the validate() method of the isemail package
  const validateMessage = (value, label) => {
    if (value.length < 2) throw new Error(`${label} is invalid`);
  };
  return (
    <TextInput
      type="text"
      validator={validateMessage}
      width="100%"
      {...restProps}
    />
  );
};

MessageInput.propTypes = {
  label: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onStateChanged: PropTypes.func,
};

export default MessageInput;
