import React, { Component } from "react";
import styled from "styled-components";
import { saturate, darken } from "polished";
import PropTypes from "prop-types";

class TextInput extends Component {
  // initialize state
  state = { value: "", dirty: false, errors: [] };

  hasChanged = (e) => {
    e.preventDefault();

    // destructure props - assign default dummy functions to validator and onStateChanged props
    const {
      label,
      required = false,
      validator = (f) => f,
      onStateChanged = (f) => f,
    } = this.props;

    const value = e.target.value;
    const isEmpty = value.length === 0;
    const requiredMissing = this.state.dirty && required && isEmpty;

    let errors = [];

    if (requiredMissing) {
      // if required and is empty, add required error to state
      errors = [...errors, `${label} is required`];
    } else if ("function" === typeof validator) {
      try {
        validator(value, label);
      } catch (e) {
        // if validator throws error, add validation error to state
        errors = [...errors, e.message];
      }
    }

    // update state and call the onStateChanged callback fn after the update
    // dirty is only changed to true and remains true on and after the first state update
    this.setState(
      ({ dirty = false }) => ({ value, errors, dirty: !dirty || dirty }),
      () => onStateChanged(this.state)
    );
  };

  render() {
    const { value, dirty, errors } = this.state;
    const { type, labelId, label, placeholder, width, required } = this.props;

    const hasError = errors.length > 0;
    const controlClass = [dirty ? (hasError ? "is-invalid" : "is-valid") : ""]
      .join("")
      .trim();
    const controlLabel = [
      dirty ? (hasError ? "label-invalid" : "label-valid") : "",
    ]
      .join("")
      .trim();

    return (
      <>
        <Container width={width}>
          <Label htmlFor={labelId} className={controlLabel}>
            {label}
          </Label>
          <Input
            type={type}
            className={controlClass}
            id={labelId}
            placeholder={placeholder}
            value={value}
            onChange={this.hasChanged}
            required={required}
          />
          {hasError && <ErrorWrapper>{errors[0]}</ErrorWrapper>}
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  background: ${saturate(0.3, "#fff")};
  width: ${(props) => (props.width ? props.width : "350px")};
  position: relative;

  & .is-invalid {
    border-bottom: 2px solid ${saturate(0.2, "#F44C57")} !important;
  }

  & .is-valid {
    border-bottom: 2px solid ${saturate(0.2, "#472ECD")} !important;
  }

  & .label-invalid {
    color: ${saturate(0.0, "#A4A2BC")} !important;
  }

  & .label-valid {
    color: ${saturate(0.2, "#472ECD")} !important;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  line-height: 20px;
  font-size: 22px;
  padding: 9px 0 15px 0px;
  font-family: inherit;
  background: none;
  color: #0e054d;
  caret-color: #332e4b;
  border-bottom: 2px solid ${saturate(0.0, "#A4A2BC")};
  transition: border-bottom 1s ease-in-out;

  &::placeholder {
    color: #a4a2bc;
  }
`;

const Label = styled.label`
  line-height: 1px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  color: ${darken(0.4, "#332E4B")} !important;
  transition: color 1s ease-in-out;
`;

const ErrorWrapper = styled.div`
  color: ${darken(0.1, "#F44C57")};
`;

TextInput.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password", "tel"]).isRequired,
  labelId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  validator: PropTypes.func,
  required: PropTypes.bool,
  onStateChanged: PropTypes.func,
  width: PropTypes.string,
};

export default TextInput;
